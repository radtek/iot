package com.dsw.iot.model;

import java.util.Date;

public class AlarmManageDo {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm_manage.id
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    private Long id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm_manage.alarm_type
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    private String alarmType;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm_manage.alarm_level
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    private String alarmLevel;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm_manage.alarm_time
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    private Date alarmTime;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm_manage.content
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    private String content;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm_manage.dept
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    private String dept;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm_manage.register_id
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    private Long registerId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm_manage.active_person
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    private String activePerson;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm_manage.card_id
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    private String cardId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm_manage.handle_person
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    private String handlePerson;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm_manage.handler_no
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    private String handlerNo;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm_manage.handle_method
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    private String handleMethod;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm_manage.handle_content
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    private String handleContent;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm_manage.status
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    private String status;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm_manage.is_deleted
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    private String isDeleted;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm_manage.create_time
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    private Date createTime;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm_manage.create_user
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    private String createUser;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm_manage.update_time
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    private Date updateTime;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm_manage.update_user
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    private String updateUser;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column alarm_manage.remark
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    private String remark;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm_manage.id
     *
     * @return the value of alarm_manage.id
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public Long getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm_manage.id
     *
     * @param id the value for alarm_manage.id
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm_manage.alarm_type
     *
     * @return the value of alarm_manage.alarm_type
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public String getAlarmType() {
        return alarmType;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm_manage.alarm_type
     *
     * @param alarmType the value for alarm_manage.alarm_type
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public void setAlarmType(String alarmType) {
        this.alarmType = alarmType == null ? null : alarmType.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm_manage.alarm_level
     *
     * @return the value of alarm_manage.alarm_level
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public String getAlarmLevel() {
        return alarmLevel;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm_manage.alarm_level
     *
     * @param alarmLevel the value for alarm_manage.alarm_level
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public void setAlarmLevel(String alarmLevel) {
        this.alarmLevel = alarmLevel == null ? null : alarmLevel.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm_manage.alarm_time
     *
     * @return the value of alarm_manage.alarm_time
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public Date getAlarmTime() {
        return alarmTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm_manage.alarm_time
     *
     * @param alarmTime the value for alarm_manage.alarm_time
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public void setAlarmTime(Date alarmTime) {
        this.alarmTime = alarmTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm_manage.content
     *
     * @return the value of alarm_manage.content
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public String getContent() {
        return content;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm_manage.content
     *
     * @param content the value for alarm_manage.content
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm_manage.dept
     *
     * @return the value of alarm_manage.dept
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public String getDept() {
        return dept;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm_manage.dept
     *
     * @param dept the value for alarm_manage.dept
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public void setDept(String dept) {
        this.dept = dept == null ? null : dept.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm_manage.register_id
     *
     * @return the value of alarm_manage.register_id
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public Long getRegisterId() {
        return registerId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm_manage.register_id
     *
     * @param registerId the value for alarm_manage.register_id
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public void setRegisterId(Long registerId) {
        this.registerId = registerId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm_manage.active_person
     *
     * @return the value of alarm_manage.active_person
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public String getActivePerson() {
        return activePerson;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm_manage.active_person
     *
     * @param activePerson the value for alarm_manage.active_person
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public void setActivePerson(String activePerson) {
        this.activePerson = activePerson == null ? null : activePerson.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm_manage.card_id
     *
     * @return the value of alarm_manage.card_id
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public String getCardId() {
        return cardId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm_manage.card_id
     *
     * @param cardId the value for alarm_manage.card_id
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public void setCardId(String cardId) {
        this.cardId = cardId == null ? null : cardId.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm_manage.handle_person
     *
     * @return the value of alarm_manage.handle_person
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public String getHandlePerson() {
        return handlePerson;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm_manage.handle_person
     *
     * @param handlePerson the value for alarm_manage.handle_person
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public void setHandlePerson(String handlePerson) {
        this.handlePerson = handlePerson == null ? null : handlePerson.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm_manage.handler_no
     *
     * @return the value of alarm_manage.handler_no
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public String getHandlerNo() {
        return handlerNo;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm_manage.handler_no
     *
     * @param handlerNo the value for alarm_manage.handler_no
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public void setHandlerNo(String handlerNo) {
        this.handlerNo = handlerNo == null ? null : handlerNo.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm_manage.handle_method
     *
     * @return the value of alarm_manage.handle_method
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public String getHandleMethod() {
        return handleMethod;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm_manage.handle_method
     *
     * @param handleMethod the value for alarm_manage.handle_method
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public void setHandleMethod(String handleMethod) {
        this.handleMethod = handleMethod == null ? null : handleMethod.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm_manage.handle_content
     *
     * @return the value of alarm_manage.handle_content
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public String getHandleContent() {
        return handleContent;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm_manage.handle_content
     *
     * @param handleContent the value for alarm_manage.handle_content
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public void setHandleContent(String handleContent) {
        this.handleContent = handleContent == null ? null : handleContent.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm_manage.status
     *
     * @return the value of alarm_manage.status
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public String getStatus() {
        return status;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm_manage.status
     *
     * @param status the value for alarm_manage.status
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public void setStatus(String status) {
        this.status = status == null ? null : status.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm_manage.is_deleted
     *
     * @return the value of alarm_manage.is_deleted
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public String getIsDeleted() {
        return isDeleted;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm_manage.is_deleted
     *
     * @param isDeleted the value for alarm_manage.is_deleted
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public void setIsDeleted(String isDeleted) {
        this.isDeleted = isDeleted == null ? null : isDeleted.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm_manage.create_time
     *
     * @return the value of alarm_manage.create_time
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm_manage.create_time
     *
     * @param createTime the value for alarm_manage.create_time
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm_manage.create_user
     *
     * @return the value of alarm_manage.create_user
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public String getCreateUser() {
        return createUser;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm_manage.create_user
     *
     * @param createUser the value for alarm_manage.create_user
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public void setCreateUser(String createUser) {
        this.createUser = createUser == null ? null : createUser.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm_manage.update_time
     *
     * @return the value of alarm_manage.update_time
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public Date getUpdateTime() {
        return updateTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm_manage.update_time
     *
     * @param updateTime the value for alarm_manage.update_time
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm_manage.update_user
     *
     * @return the value of alarm_manage.update_user
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public String getUpdateUser() {
        return updateUser;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm_manage.update_user
     *
     * @param updateUser the value for alarm_manage.update_user
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public void setUpdateUser(String updateUser) {
        this.updateUser = updateUser == null ? null : updateUser.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column alarm_manage.remark
     *
     * @return the value of alarm_manage.remark
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public String getRemark() {
        return remark;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column alarm_manage.remark
     *
     * @param remark the value for alarm_manage.remark
     *
     * @mbggenerated Thu Mar 01 11:47:52 CST 2018
     */
    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }
}