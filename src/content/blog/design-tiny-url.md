---
title: '系统设计手绘：短链服务 TinyURL'
description: '一张手绘图：从需求拆解、API 设计到三种短码生成方案。'
pubDate: 2026-11-19
tags: ['系统设计']
thumb: '../../assets/tiny-url/short_url.svg'
---

一张图梳理短链服务（TinyURL / URL Shortener）的完整设计：需求与 CAP 取舍、API 设计、高层架构，以及三种短码生成方案——MD5 截断、Redis 计数器、ZooKeeper 号段。

![短链服务系统设计（手绘）](../../assets/tiny-url/short_url.svg)

*（点击图片可放大细看）*
