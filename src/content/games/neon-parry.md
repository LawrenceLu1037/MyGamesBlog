---
title: "Neon Parry"
tagline: "一击反制驱动的高速动作原型"
description: "围绕招架窗口、敌人节奏和短局重开的动作系统实验。重点不在堆数值，而在让每次成功反制都清楚、响亮、可学习。"
status: "Prototype"
role: "Design / Programming / Combat Feel"
year: 2026
engine: "Unity"
cover: "/images/games/neon-parry.svg"
accent: "#48f2d5"
links:
  - label: "Devlog"
    href: "/posts/combat-feedback-breakdown"
highlights:
  - "招架窗口与敌人攻击前摇的节奏匹配"
  - "命中暂停、屏幕震动和音效反馈的分层"
  - "短局循环下的失败恢复和重开速度"
---

## 设计目标

`Neon Parry` 用一个很小的战斗场景验证动作游戏里最核心的手感：玩家是否能理解危险、做出判断，并在成功时得到足够明确的反馈。

## 拆解方向

- 敌人攻击的可读性
- 招架成功后的奖励节奏
- 失败惩罚是否影响玩家继续尝试

## 下一步

加入第二类敌人，让玩家在“等待反击”和“主动压制”之间做选择。
