package com.niit.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Job {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String jobTitle;
	private String jobDescribtion;
	private String location;
	private String yrsOfExp;
	private String company;
	private Date postedOn;
	@Column(name="is_active")
	private boolean active;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getJobTitle() {
		return jobTitle;
	}
	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}
	public String getJobDescribtion() {
		return jobDescribtion;
	}
	public void setJobDescribtion(String jobDescribtion) {
		this.jobDescribtion = jobDescribtion;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getYrsOfExp() {
		return yrsOfExp;
	}
	public void setYrsOfExp(String yrsOfExp) {
		this.yrsOfExp = yrsOfExp;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}

	public Date getPostedOn() {
		return postedOn;
	}
	public void setPostedOn(Date postedOn) {
		this.postedOn = postedOn;
	}
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
	
	

}
