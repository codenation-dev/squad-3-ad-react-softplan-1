package com.central.bo;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Log {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String title;
    private String type;
    private String orign;
    private String detail;
    private Long quantity;
    private Date createDate;
    private String situacao;
    
    public Log() {
    }

    public Log(String name, String type, String orign, String detail, Long quantity, Date createDate) {
    	this.setName(name); 
    	this.setTitle(" title "+name);
    	this.setType(type);
    	this.setOrign(orign);
    	this.setDetail(detail);
    	this.setQuantity(quantity);
    	this.setCreateDate(createDate);
    	this.setSituacao("I");
    }

    public Long getId() {
        return id;
    }

    public void setId(Long value) {
        this.id = value;
    }

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getOrign() {
		return orign;
	}

	public void setOrign(String orign) {
		this.orign = orign;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}

	public Long getQuantity() {
		return quantity;
	}

	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

    @Override
    public String toString() {
        return "Log{" +
                "id=" + id +
                ", name='" + getName() + '\'' +
                ", title='" + getTitle() + '\'' +
                ", type='" + getType() + '\'' +
                ", orign='" + getOrign() + '\'' +
                ", detail='" + getDetail() + '\'' +
                ", quantity=" + getQuantity() +
                ", createDate='" + getCreateDate() + '\'' +
                '}';
    }

	public String getSituacao() {
		return situacao;
	}

	public void setSituacao(String situacao) {
		this.situacao = situacao;
	}

}
