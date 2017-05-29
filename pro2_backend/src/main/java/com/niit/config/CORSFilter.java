package com.niit.config;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

public class CORSFilter implements Filter{

	public void doFilter(ServletRequest request, ServletResponse resp, FilterChain arg2)
			throws IOException, ServletException {
		
		
		
		System.out.println("Filtering.............");
		HttpServletResponse response=(HttpServletResponse)resp;
		
		response.setHeader("Access-Control-Allow-Origin","*");
		response.setHeader("Access-Control-Allow-Methods","POST,GET,PUT,DELETE");
		response.setHeader("Access-Control-Max-Age","3600");
		response.setHeader("Access-Control-Allow-Headers", "X-requested-with, Content-Type");
		arg2.doFilter(request, resp);
		
	}

	public void destroy() {
		
	}

	public void init(FilterConfig filterConfig) throws ServletException {
		
	}

}
