package com.dsw.iot.handler;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.collections4.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.alibaba.fastjson.JSONObject;
import com.dsw.iot.model.RoleDo;
import com.dsw.iot.model.UserDo;
import com.dsw.iot.service.CurrentUserService;
import com.dsw.iot.service.RoleService;
import com.dsw.iot.util.CookieUtil;
import com.dsw.iot.util.PrivilegeInfo;

/**
 * 请求拦截读取登录用户
 * //TODO 可在此进行权限校验 暂时不需要
 *
 * @author huangt
 * @create 2018-02-01 15:13
 **/
public class PrivilegeInterceptor extends HandlerInterceptorAdapter {
    private static final Logger logger = LoggerFactory.getLogger(PrivilegeInterceptor.class);
    @Autowired
    private CurrentUserService currentUserService;
	@Autowired
	private RoleService roleService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //打印请求
        StringBuilder sb = new StringBuilder();
        sb.append(request.getMethod())
                .append(" ")
                .append(request.getRemoteHost())
                .append(":")
                .append("8090")
                .append(request.getRequestURI()).append(" params:").append(JSONObject.toJSONString(request.getParameterMap()));
        logger.info(sb.toString());
        //获取登录用户 存储到 会话单例user
        PrivilegeInfo privilegeInfo = new PrivilegeInfo();
        UserDo userDo = CookieUtil.getUserFromCookie(request, response);
        if (null != userDo) {
            privilegeInfo.setAccount(userDo.getAccount());
			privilegeInfo.setUserId(userDo.getId());
			// 获得ip
			String hostContent = request.getHeader("Host");
			String localIp = hostContent.substring(0, hostContent.indexOf(":"));
			privilegeInfo.setIp(localIp);
			// 查询当前用户的角色
			List<RoleDo> roleHas = roleService.listRoleByUserId(userDo.getId());
			String roleIds = "";
			if (CollectionUtils.isNotEmpty(roleHas)) {
				for (RoleDo roleDo : roleHas) {
					roleIds += roleDo.getId() + ",";
				}
			}
			privilegeInfo.setRoleIds(roleIds);
			privilegeInfo.setName(userDo.getRealName());
            currentUserService.setPvginfo(privilegeInfo);
        }
        //如果是.html 需要校验菜单权限 TODO

        return super.preHandle(request, response, handler);
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        currentUserService.clean();
        super.afterCompletion(request, response, handler, ex);
    }
}
