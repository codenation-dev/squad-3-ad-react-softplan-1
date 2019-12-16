package com.central.bo;

import java.util.List;

public class LogPaginado {

	private List<Log> logs;
    private Integer total;
    
    public LogPaginado() {
    }

    public LogPaginado(List<Log> logs, Integer total) {
    }

	public List<Log> getLogs() {
		return logs;
	}

	public void setLogs(List<Log> logs) {
		this.logs = logs;
	}

	public Integer getTotal() {
		return total;
	}

	public void setTotal(Integer total) {
		this.total = total;
	}

    @Override
    public String toString() {
        return "LogPaginado{" +
                "total=" + total +
                ", logs=" + logs +
                '}';
    }

}
