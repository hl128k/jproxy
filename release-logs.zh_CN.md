
[中文](https://github.com/LuckyPuppy514/jproxy/blob/main/release-logs.zh_CN.md) | [English](https://github.com/LuckyPuppy514/jproxy/blob/main/release-logs.md)

# 发布日志

## v2.5.2 2022-08-01

1. 新功能：保存代理配置时，先进行连通性测试

## v2.5.1 2022-07-30

1. 更新 README.md
2. 变更 sqlite-jdbc 版本到：3.39.2-SNAPSHOT，用于修复在 aarch64 机器上 docker build 出错的问题
3. 修复同步出错的问题
4. 修复 prowlarr 错误

## v2.5.0 2022-07-30

1. 简单界面：支持中文和英文
2. 代理配置：配置 Jackett / Prowlarr 的地址，端口等信息
3. 新增规则：包括查询规则和结果规则
4. 规则管理：查询，编辑，删除，分享，以及导入导出等
5. 规则市场：可以查询大家分享的规则，并下载
6. 用例测试：可以批量添加标题进行测试，查看格式化后的效果
