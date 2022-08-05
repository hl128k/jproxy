/**
 * @Title: ProwlarrInterceptor.java
 * @version V1.0
 */
package com.lckp.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.HandlerInterceptor;

import com.lckp.config.JProxyConfiguration;
import com.lckp.constant.Field;
import com.lckp.constant.ProxyType;
import com.lckp.param.ProxyParam;
import com.lckp.proxy.IndexerProxy;

/**
 * @className: ProwlarrInterceptor
 * @description: Prowlarr 拦截器
 * @date 2022年8月4日
 * @author LuckyPuppy514
 */
public class ProwlarrInterceptor extends IndexerProxy implements HandlerInterceptor {
	private static final Logger LOGGER = LoggerFactory.getLogger(ProwlarrInterceptor.class);

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		String path = request.getServletPath().substring(9);
		LOGGER.debug("Prowlarr Proxy: {}", path);
		
		if (null == JProxyConfiguration.prowlarr) {
			LOGGER.error("JProxyConfiguration.prowlarr is null");
			return false;
		}
		
		ProxyParam proxyParam = new ProxyParam();
		proxyParam.setProxyPath(path);
		proxyParam.setProxyType(ProxyType.Prowlarr);
		proxyParam.setSearchKeyField(Field.PROWLARR_SEARCH_KEY);
		preProxy(JProxyConfiguration.prowlarr, proxyParam, request, response);
		return false;
	}
}