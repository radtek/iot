package com.dsw.iot.controller.html;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dsw.iot.model.RemindDo;
import com.dsw.iot.service.CurrentUserService;
import com.dsw.iot.service.RemindService;


@Controller
@RequestMapping("/RemindHtml")
public class RemindHtml {

	@Autowired
	RemindService remindService;
	@Autowired
	CurrentUserService currentUserService;

	/**
	 * 首页
	 *
	 * @param model
	 * @return
	 */
	@RequestMapping("/index")
	public String index(Model model , String roleIds) {
		if (StringUtils.isBlank(roleIds)) {
			roleIds = currentUserService.getPvgInfo().getRoleIds();
		}
		model.addAttribute("roleIds", roleIds.replace(".html", ""));
		return "remind/index";
	}

	/**
	 * 查看详情
	 *
	 * @param model
	 * @param id
	 * @return
	 */
	@RequestMapping("/detail")
	public String detail(Model model, Long id) {
		RemindDo RemindDo = new RemindDo();
		if (null != id) {
			RemindDo = remindService.getRemind(id);
		}
		model.addAttribute("item", RemindDo);
		return "remind/detail";
	}
}
