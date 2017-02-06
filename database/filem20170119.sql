/*
Navicat MySQL Data Transfer

Source Server         : Owner
Source Server Version : 50527
Source Host           : 120.77.200.91:3306
Source Database       : filem

Target Server Type    : MYSQL
Target Server Version : 50527
File Encoding         : 65001

Date: 2017-01-09 09:44:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for f_director
-- ----------------------------
DROP TABLE IF EXISTS `f_director`;
CREATE TABLE `f_director` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL COMMENT '导演名称',
  `original_name` varchar(100) DEFAULT NULL COMMENT '导演原名',
  `alt` varchar(255) DEFAULT NULL COMMENT '导演介绍链接界面地址',
  `avatar_small` varchar(255) DEFAULT NULL COMMENT '导演缩略图小',
  `avatar_large` varchar(255) DEFAULT NULL COMMENT '导演缩略图大',
  `avatar_medium` varchar(255) DEFAULT NULL COMMENT '导演缩略图中',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='导演信息表';

-- ----------------------------
-- Table structure for f_performer
-- ----------------------------
DROP TABLE IF EXISTS `f_performer`;
CREATE TABLE `f_performer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL COMMENT '演员名字',
  `original_name` varchar(100) DEFAULT NULL COMMENT '演员原名',
  `alt` varchar(255) DEFAULT NULL COMMENT '演员介绍界面地址',
  `avatar_small` varchar(255) DEFAULT NULL COMMENT '演员缩略图小',
  `avatar_large` varchar(255) DEFAULT NULL COMMENT '演员缩略图大',
  `avatar_medium` varchar(255) DEFAULT NULL COMMENT '演员缩略图中',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='演员信息表';

-- ----------------------------
-- Table structure for f_principal
-- ----------------------------
DROP TABLE IF EXISTS `f_principal`;
CREATE TABLE `f_principal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL COMMENT '标题',
  `original_title` varchar(50) DEFAULT NULL COMMENT '原标题',
  `subtype` varchar(30) DEFAULT NULL COMMENT '类型',
  `year` smallint(4) DEFAULT NULL COMMENT '出品年份',
  `alt` varchar(255) DEFAULT NULL COMMENT '详情链接',
  `image_small` varchar(255) DEFAULT NULL COMMENT '电影缩略图小',
  `image_large` varchar(255) DEFAULT NULL COMMENT '电影缩略图大',
  `image_medium` varchar(255) DEFAULT NULL COMMENT '电影缩略图中',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='电影主表';

-- ----------------------------
-- Table structure for f_rating
-- ----------------------------
DROP TABLE IF EXISTS `f_rating`;
CREATE TABLE `f_rating` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `principal_id` int(11) DEFAULT NULL COMMENT '主表主键',
  `max` decimal(10,1) DEFAULT NULL COMMENT '最大分数',
  `average` decimal(10,1) DEFAULT NULL COMMENT '平均分',
  `stars` decimal(10,0) DEFAULT NULL COMMENT '称赞',
  `min` decimal(10,1) DEFAULT NULL COMMENT '最小评分',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='电影评分表';

-- ----------------------------
-- Table structure for f_relation_pd
-- ----------------------------
DROP TABLE IF EXISTS `f_relation_pd`;
CREATE TABLE `f_relation_pd` (
  `principal_id` int(11) NOT NULL COMMENT '电影主表主键',
  `director_id` int(11) NOT NULL COMMENT '导演表主键',
  PRIMARY KEY (`principal_id`,`director_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='关系表--电影-导演';

-- ----------------------------
-- Table structure for f_relation_pp
-- ----------------------------
DROP TABLE IF EXISTS `f_relation_pp`;
CREATE TABLE `f_relation_pp` (
  `principal_id` int(11) NOT NULL COMMENT '电影表主键',
  `performer_id` int(11) NOT NULL COMMENT '演员表主键',
  PRIMARY KEY (`principal_id`,`performer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='关系表--电影-演员';
