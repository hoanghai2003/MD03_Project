-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: products
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `name_product` varchar(1638) NOT NULL,
  `img_product` varchar(1638) NOT NULL,
  `city` varchar(45) NOT NULL,
  `address_product` varchar(255) NOT NULL,
  `star_product` int DEFAULT NULL,
  `status_product` tinyint(1) DEFAULT NULL,
  `price_product` int DEFAULT NULL,
  `count_order` int DEFAULT NULL,
  `like_product` int DEFAULT NULL,
  `product_description` varchar(1638) DEFAULT NULL,
  `addsell_product` varchar(255) DEFAULT NULL,
  `endow_product` varchar(1638) DEFAULT NULL,
  `discount_product` int NOT NULL,
  `shop_form` varchar(45) NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`product_id`),
  KEY `category_id_idx` (`category_id`),
  CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'A-Phú - Mì Trộn Indomie - Hồng Mai','https://images.foody.vn/res/g98/977661/prof/s640x400/image-2a746aad-200910115816.jpeg','Hà Nội','7 Ngõ 158 Hồng Mai, P. Bạch Mai, Hai Bà Trưng, Hà Nội',234,1,30000,7,5,'1 gói mỳ indomie, 1 tôm, 1 viên mực, 1 hồ lô, 1 viên cá, 1 viên bò, 1 trứng cút, 2 miếng xúc xích','9','Giảm 25K khi đặt combo có 01 Coca-Cola. Số lượng ưu đãi có hạn.',50,'Quán Ăn',1),(2,'Royaltea - Trà Sữa Hồng Kông - Hồ Tùng Mậu','https://images.foody.vn/res/g68/673171/prof/s640x400/foody-mobile-459-jpg-753-636352832676344576.jpg','Hà Nội','8 Ng. 66 Đ. Hồ Tùng Mậu, P. Mai Dịch, Cầu Giấy, Hà Nội',567,1,35000,8,8,NULL,'6',NULL,30,'Quán Ăn',1),(3,'Le Castella Hà Nội - Taste Of Taiwan - Vũ Hữu','https://images.foody.vn/res/g70/697508/prof/s280x175/file_restaurant_photo_1koa_16162-1bd78e7c-210321010942.jpg','Hà Nội','170 Vũ Hữu, P. Thanh Xuân Bắc, Thanh Xuân, Hà Nội',999,1,40000,3,7,'Le Castella chỉ bán bánh tươi trong ngày không chất bảo quản Nếu chưa dùng hết quý khách có thể bảo quản tủ lạnh 2-3 ngày/khi dùng món sấy trong lò vi sóng 2p cùng 1 BÁT NƯỚC NÓNG để bánh mềm trở lại','8','Thanh toán thẻ tín dụng Home Credit: Giảm 30K, đơn tối thiểu 120K vào tất cả các ngày trong tuần.',15,'Quán Ăn',1),(4,'Kloud Tea - Trà Sữa Homemade','https://images.foody.vn/res/g66/654208/prof/s640x400/file_restaurant_photo_5bz7_16321-ccc29ca9-210920235017.jpg','Hà Nội','167 Phố Chùa Quỳnh, P. Quỳnh Lôi, Hai Bà Trưng, Hà Nội',999,0,34000,3,19,'Mỗi cốc đã bao gômf 1 suất phomai viên (5 viên) và 1 suất trân châu đen','8','Thanh toán thẻ tín dụng Home Credit: Giảm 30K, đơn tối thiểu 120K vào tất cả các ngày trong tuần.',20,'Quán Ăn',1),(5,'Chimico - Cơm Trộn & Kim Chi Tỏi Đen - Chùa Láng','https://images.foody.vn/res/g116/1152318/prof/s640x400/foody-upload-api-foody-mobile-fo-aaa0da77-221003170313.jpeg','Hà Nội','15 Ngõ 157 Chùa Láng, P. Láng Thượng, Đống Đa, Hà Nội',637,1,65000,7,67,NULL,'7','Thanh toán thẻ tín dụng Home Credit: Giảm 30K, đơn tối thiểu 120K vào tất cả các ngày trong tuần.',45,'Quán Ăn',2),(6,'Bếp Mẹ Thỏ - Bún, Miến & Phở Trộn - Đông Thiên','https://images.foody.vn/res/g112/1114595/prof/s640x400/foody-upload-api-foody-mobile-fi-78e2bb52-211104195306.jpeg','Hà Nội','37 Ngõ 140/30 Đông Thiên, P. Vĩnh Hưng, Hoàng Mai, Hà Nội',345,0,73000,7,45,' Mùa nay rau xà lách sẽ hơi có vị đắng tuỳ từng hôm. Khách hàng ăn phở cuốn, bún bò căn nhắc khi đặt ạ. Quán cám ơn','4','Thanh toán thẻ tín dụng Home Credit: Giảm 30K, đơn tối thiểu 120K vào tất cả các ngày trong tuần.',42,'ĂN VẶT/VỈA HÈ',3),(7,'Deilyno - Bún Trộn Nam Bộ & Miến Trộn Đặc Biệt - Tả Thanh Oai','https://images.foody.vn/res/g106/1050058/prof/s640x400/image-15c36f87-211105213046.jpeg','Hà Nội','Mặt Tiền Đường Tả Thanh Oai, Cách 3 Nhà Tính Từ Ngõ 14, Thanh Trì, Hà Nội',234,0,56000,4,35,'Bún, Thịt Bò Nac, Rau Sống, Trứng Luộc, Giá Trần, Lạc, Hành Phi, Kèm Nước Trộn','3','Thanh toán thẻ tín dụng Home Credit: Giảm 30K, đơn tối thiểu 120K vào tất cả các ngày trong tuần.',34,'Quán Ăn',4),(8,'Trà Sữa Tocotoco - Thượng Đình','https://images.foody.vn/res/g71/702021/prof/s280x175/foody-mobile-23376408_54246046275.jpg','Hà Nội','266 Thượng Đình, P. Thượng Đình, Thanh Xuân, Hà Nội',324,0,32000,6,32,NULL,'4','Thanh toán thẻ tín dụng Home Credit: Giảm 30K, đơn tối thiểu 120K vào tất cả các ngày trong tuần.',32,'CAFÉ/DESSERT',5),(9,'Min Bakery - Bông Lan Trứng Muối - Lê Quang Đạo','https://images.foody.vn/res/g112/1119662/prof/s640x400/foody-upload-api-foody-mobile-fi-200f8430-211206091033.jpeg','Hà Nội','160/8 Lê Quang Đạo, P. Phú Đô, Nam Từ Liêm, Hà Nội',643,1,56000,9,43,'Gồm Cốt Chiffon, ruốc ga cay handmade, sốt phomai chảy, sốt dầu trứng, dĩa gỗ , túi sinh học tự huỷ ...','4','Thanh toán thẻ tín dụng Home Credit: Giảm 30K, đơn tối thiểu 120K vào tất cả các ngày trong tuần.',30,'TIỆM BÁNH ',6),(10,'Chè Ngon Phố - Cổ Nhuế','https://images.foody.vn/res/g100/996223/prof/s640x400/foody-upload-api-foody-mobile-kham-pha-3-quan-che--200102135359.jpg','Hà Nội','36 Ngõ 43 Cổ Nhuế, P. Cổ Nhuế 2, Bắc Từ Liêm, Hà Nội',472,1,42000,5,35,NULL,'9','Thanh toán thẻ tín dụng Home Credit: Giảm 30K, đơn tối thiểu 120K vào tất cả các ngày trong tuần.',35,'ĂN VẶT/VỈA HÈ',2),(11,'Cơm Ba Ghiên - Nguyễn Văn Trỗi','https://images.foody.vn/res/g116/1155652/prof/s640x400/foody-upload-api-foody-mobile-im-6522b18f-221112225428.jpeg','TP. HCM','146/3 Nguyễn Văn Trỗi, P. 8, Phú Nhuận, TP. HCM',NULL,1,40000,NULL,NULL,NULL,NULL,NULL,10,'QUÁN ĂN',1),(12,'Bún Bò Long Mập - Đường Số 22','https://images.foody.vn/res/g104/1036293/prof/s640x400/foody-upload-api-foody-mobile-64-200714143935.jpg','TP. HCM','103 Đường Số 22, P. Phước Long B, Thành Phố Thủ Đức, TP. HCM',NULL,1,34000,NULL,NULL,NULL,NULL,NULL,10,'QUÁN ĂN',1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-10 13:31:54
