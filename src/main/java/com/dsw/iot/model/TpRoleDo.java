package com.dsw.iot.model;

public class TpRoleDo {
    /**
     * This field was generated by MyBatis Generator. This field corresponds to
     * the database column tp_role.id
     *
     * @mbggenerated Wed Jan 17 13:48:27 CST 2018
     */
    private Long id;

    /**
     * This field was generated by MyBatis Generator. This field corresponds to
     * the database column tp_role.rolename
     *
     * @mbggenerated Wed Jan 17 13:48:27 CST 2018
     */
    private String rolename;

    /**
     * This field was generated by MyBatis Generator. This field corresponds to
     * the database column tp_role.menu_ids
     *
     * @mbggenerated Wed Jan 17 13:48:27 CST 2018
     */
    private String menuIds;

    /**
     * This field was generated by MyBatis Generator. This field corresponds to
     * the database column tp_role.sort
     *
     * @mbggenerated Wed Jan 17 13:48:27 CST 2018
     */
    private Integer sort;

    /**
     * This field was generated by MyBatis Generator. This field corresponds to
     * the database column tp_role.issuper
     *
     * @mbggenerated Wed Jan 17 13:48:27 CST 2018
     */
    private Integer issuper;

    /**
     * This field was generated by MyBatis Generator. This field corresponds to
     * the database column tp_role.is_delete
     *
     * @mbggenerated Wed Jan 17 13:48:27 CST 2018
     */
    private String isDelete;

    /**
     * This field was generated by MyBatis Generator. This field corresponds to
     * the database column tp_role.add_date
     *
     * @mbggenerated Wed Jan 17 13:48:27 CST 2018
     */
    private String addDate;

    /**
     * This method was generated by MyBatis Generator. This method returns the
     * value of the database column tp_role.id
     *
     * @return the value of tp_role.id
     * @mbggenerated Wed Jan 17 13:48:27 CST 2018
     */
    public Long getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator. This method sets the
     * value of the database column tp_role.id
     *
     * @param id the value for tp_role.id
     * @mbggenerated Wed Jan 17 13:48:27 CST 2018
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator. This method returns the
     * value of the database column tp_role.rolename
     *
     * @return the value of tp_role.rolename
     * @mbggenerated Wed Jan 17 13:48:27 CST 2018
     */
    public String getRolename() {
        return rolename;
    }

    /**
     * This method was generated by MyBatis Generator. This method sets the
     * value of the database column tp_role.rolename
     *
     * @param rolename the value for tp_role.rolename
     * @mbggenerated Wed Jan 17 13:48:27 CST 2018
     */
    public void setRolename(String rolename) {
        this.rolename = rolename == null ? null : rolename.trim();
    }

    /**
     * This method was generated by MyBatis Generator. This method returns the
     * value of the database column tp_role.menu_ids
     *
     * @return the value of tp_role.menu_ids
     * @mbggenerated Wed Jan 17 13:48:27 CST 2018
     */
    public String getMenuIds() {
        return menuIds;
    }

    /**
     * This method was generated by MyBatis Generator. This method sets the
     * value of the database column tp_role.menu_ids
     *
     * @param menuIds the value for tp_role.menu_ids
     * @mbggenerated Wed Jan 17 13:48:27 CST 2018
     */
    public void setMenuIds(String menuIds) {
        this.menuIds = menuIds == null ? null : menuIds.trim();
    }

    /**
     * This method was generated by MyBatis Generator. This method returns the
     * value of the database column tp_role.sort
     *
     * @return the value of tp_role.sort
     * @mbggenerated Wed Jan 17 13:48:27 CST 2018
     */
    public Integer getSort() {
        return sort;
    }

    /**
     * This method was generated by MyBatis Generator. This method sets the
     * value of the database column tp_role.sort
     *
     * @param sort the value for tp_role.sort
     * @mbggenerated Wed Jan 17 13:48:27 CST 2018
     */
    public void setSort(Integer sort) {
        this.sort = sort;
    }

    /**
     * This method was generated by MyBatis Generator. This method returns the
     * value of the database column tp_role.issuper
     *
     * @return the value of tp_role.issuper
     * @mbggenerated Wed Jan 17 13:48:27 CST 2018
     */
    public Integer getIssuper() {
        return issuper;
    }

    /**
     * This method was generated by MyBatis Generator. This method sets the
     * value of the database column tp_role.issuper
     *
     * @param issuper the value for tp_role.issuper
     * @mbggenerated Wed Jan 17 13:48:27 CST 2018
     */
    public void setIssuper(Integer issuper) {
        this.issuper = issuper;
    }

    /**
     * This method was generated by MyBatis Generator. This method returns the
     * value of the database column tp_role.is_delete
     *
     * @return the value of tp_role.is_delete
     * @mbggenerated Wed Jan 17 13:48:27 CST 2018
     */
    public String getIsDelete() {
        return isDelete;
    }

    /**
     * This method was generated by MyBatis Generator. This method sets the
     * value of the database column tp_role.is_delete
     *
     * @param isDelete the value for tp_role.is_delete
     * @mbggenerated Wed Jan 17 13:48:27 CST 2018
     */
    public void setIsDelete(String isDelete) {
        this.isDelete = isDelete == null ? null : isDelete.trim();
    }

    /**
     * This method was generated by MyBatis Generator. This method returns the
     * value of the database column tp_role.add_date
     *
     * @return the value of tp_role.add_date
     * @mbggenerated Wed Jan 17 13:48:27 CST 2018
     */
    public String getAddDate() {
        return addDate;
    }

    /**
     * This method was generated by MyBatis Generator. This method sets the
     * value of the database column tp_role.add_date
     *
     * @param addDate the value for tp_role.add_date
     * @mbggenerated Wed Jan 17 13:48:27 CST 2018
     */
    public void setAddDate(String addDate) {
        this.addDate = addDate == null ? null : addDate.trim();
    }
}