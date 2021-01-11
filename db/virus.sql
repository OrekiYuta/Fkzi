/*
Navicat MariaDB Data Transfer

Source Server         : 192.168.137.47
Source Server Version : 100327
Source Host           : 192.168.137.47:3306
Source Database       : virus

Target Server Type    : MariaDB
Target Server Version : 100327
File Encoding         : 65001

Date: 2021-01-08 22:59:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for daily_data
-- ----------------------------
DROP TABLE IF EXISTS `daily_data`;
CREATE TABLE `daily_data` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `country` varchar(50) DEFAULT NULL,
  `today_confirm` int(11) DEFAULT 0,
  `total_nowConfirm` int(11) DEFAULT 0,
  `total_confirm` int(11) DEFAULT 0,
  `total_dead` int(1) DEFAULT 0,
  `total_deadRate` double(5,2) unsigned zerofill DEFAULT 00.00,
  `total_heal` int(11) DEFAULT 0,
  `total_healRate` double(5,2) unsigned zerofill DEFAULT 00.00,
  `setDataTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for daily_data_copy
-- ----------------------------
DROP TABLE IF EXISTS `daily_data_copy`;
CREATE TABLE `daily_data_copy` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `country` varchar(50) DEFAULT NULL,
  `today_confirm` int(11) DEFAULT 0,
  `total_nowConfirm` int(11) DEFAULT 0,
  `total_confirm` int(11) DEFAULT 0,
  `total_dead` int(1) DEFAULT 0,
  `total_deadRate` double(5,2) unsigned zerofill DEFAULT 00.00,
  `total_heal` int(11) DEFAULT 0,
  `total_healRate` double(5,2) unsigned zerofill DEFAULT 00.00,
  `setDataTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for hotpoint
-- ----------------------------
DROP TABLE IF EXISTS `hotpoint`;
CREATE TABLE `hotpoint` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `setDataTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=520 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for hotpoint_copy
-- ----------------------------
DROP TABLE IF EXISTS `hotpoint_copy`;
CREATE TABLE `hotpoint_copy` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `setDataTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=461 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for tencent_virus_data
-- ----------------------------
DROP TABLE IF EXISTS `tencent_virus_data`;
CREATE TABLE `tencent_virus_data` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `lastUpdateTime` datetime DEFAULT NULL,
  `province_name_` varchar(50) DEFAULT NULL,
  `city_name_` varchar(50) DEFAULT NULL,
  `city_today_confirm_` int(11) DEFAULT 0,
  `city_total_confirm_` int(11) DEFAULT 0,
  `city_total_heal_` int(11) DEFAULT 0,
  `city_total_heal_rate_` double(5,2) unsigned zerofill DEFAULT 00.00,
  `city_total_dead_` int(11) DEFAULT 0,
  `city_total_dead_rate_` double(5,2) unsigned zerofill DEFAULT 00.00,
  `setDataTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4159 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for tencent_virus_data_copy
-- ----------------------------
DROP TABLE IF EXISTS `tencent_virus_data_copy`;
CREATE TABLE `tencent_virus_data_copy` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `lastUpdateTime` datetime DEFAULT NULL,
  `province_name_` varchar(50) DEFAULT NULL,
  `city_name_` varchar(50) DEFAULT NULL,
  `city_today_confirm_` int(11) DEFAULT 0,
  `city_total_confirm_` int(11) DEFAULT 0,
  `city_total_heal_` int(11) DEFAULT 0,
  `city_total_heal_rate_` double(5,2) unsigned zerofill DEFAULT 00.00,
  `city_total_dead_` int(11) DEFAULT 0,
  `city_total_dead_rate_` double(5,2) unsigned zerofill DEFAULT 00.00,
  `setDataTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4159 DEFAULT CHARSET=utf8mb4;
