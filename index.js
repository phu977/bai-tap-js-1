/*
bài 1 
Đầu vào: Lương 1 ngày, số ngày làm của nhân viên là 24 ngày

Bước xử lý:
Bước 1: khởi tạo biến thời gian làm t (ngày), Khởi tạo biến tiền lương của nhân viên 
Bước 2: khởi tạo biến lương 1 ngày của nhân viên 100.000
Bước 3: Tiền lương của nhân viên = lương 1 ngày * số ngày làm (thời gian làm)

Đầu ra: tiền lương của nhân viên 
* */
var t = 24;
var luong1 = 100000;
var tongLuong = 0;
tongLuong = luong1 * t ;
console.log("🚀 ~ file: index.js:16 ~ tongLuong:", tongLuong);

/*
bài 2 
Đầu vào: 5 số thực

Bước xử lý:
Bước 1: khởi tạo 5 biến cho 5 số thực 
Bước 2: khởi tạo biến giá trị trung bình 
Bước 3: giá trị trung bình = tổng 5 số / 5

Đầu ra: giá trị trung bình của 5 số này 

* */
var a = 5;
var b = 6;
var c = 7;
var d = 8;
var e = 9;
var average = 0;
average = (a+b+c+d+e)/5;
console.log("🚀 ~ file: index.js:37 ~ average:", average);

/*
bài 3 
Đầu vào: Gía USD hiện tại 23.500 VND , Số USD cần quy đổi: 5 USD

Bước xử lý:
Bước 1: khởi tạo biến giá quy USD, biến số USD cần đổi  
Bước 2: khởi tạo biến số tiền quy đổi sang VND
Bước 3: Số tiền quy đổi sang VND = số USD cần đổi * giá quy USD

Đầu ra: số tiền quy đổi sang VND 

* */
var currencyExchangeRate = 23500;
var usdPrice = 5 ;
var moneyExchange = 0;
moneyExchange = currencyExchangeRate * usdPrice;
console.log("🚀 ~ file: index.js:55 ~ moneyExchange:", moneyExchange,"VND")


/*
bài 4 
Đầu vào: chiều dài và chiệu rộng của hình chữ nhật 

Bước xử lý:
Bước 1: khởi tạo biến chiều dài, chiều rộng của hình chữ nhật  
Bước 2: khởi tạo biến diên tích và biến chu vi hình chữ nhật 
Bước 3: diện tích  = chiều dài * chiều rộng 
Bước 4: chu vi = (chiều dài + chiều rộng ) * 2

Đầu ra: Diện tích và chu vi hình chữ nhật

* */
var length = 10;
var width = 15;
var perimeter = 0;
var area = 0;
perimeter = (length + width) * 2 ;
area = length * width;
console.log("🚀 ~ file: index.js:76 ~ perimeter:", perimeter,"🚀 ~ file: index.js:78 ~ area:", area)

/*
bài 5 
Đầu vào: số có 2 chữ số 

Bước xử lý:
Bước 1: khởi tạo biến số 2 chữ số   
Bước 2: khởi tạo biến hàng đơn vị 
Bước 3: khởi tạo biến hàng chục 
Bước 4: tổng 2 kỹ số =  hàng đơn vị + hàng chục

Đầu ra: tổng 2 ký số 

* */
var n = 83;
var donVi = n % 10;
var chuc = Math.floor(n/ 10);
var sum = donVi + chuc;
console.log("🚀 ~ file: index.js:96 ~ sum:", sum);
