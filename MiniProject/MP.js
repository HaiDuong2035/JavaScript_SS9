let names = ["iPhone 15", "Samsung S23", "Oppo Reno", "Xiaomi 13", "Nokia C20"];
let prices = [1200, 900, 450, 600, 80];
let stocks = [10, 5, 0, 8, 15];
let choice;
let out = 0;
while (out === 0) {
    choice = +prompt(`
--- HE THONG QUAN LY KHO HANG ---
1. Loc san phan cao cap (>500)
2. Kiem dinh trang thai du lieu (Het hang/Gia san)
3. Phan tich gia tri von hoa (Tong tai san)
4. Trien khai chien dich chiet khau (Giam 10%)
5. Truy van san pham theo tu khoa
6. Bao cao tinh trang ton kho
7. Thoat chuong trinh
Vui long nhap lua chon cua ban (1-7):`);
    switch (choice) {
        case 1:
            let highEndProducts = names.filter((item, index) => prices[index] > 500);
            if (highEndProducts.length === 0) {
                alert(`
Khong co san pham nao
                `);
            } else {
                alert(`
Danh sach san pham cao cap (>500):
${highEndProducts.join(", ")}
                `);
            };
            break;
        case 2:
            let zeroSrock = stocks.some((s) => s === 0);
            let moreThan100Price = prices.every((p) => p > 100);
            alert(`
Ket qua kiem dinh:
- Co san pham het hang: ${zeroSrock ? "Co" : "Khong"}
- Tat ca san pham gia > 100: ${moreThan100Price ? "Dung" : "Sai"}
            `);
            break;
        case 3:
            let totalValue = prices.reduce((total, price, index) => {
                return total + price * stocks[index];
            }, 0);
            alert(`
Tong gia tri tai san hien co trong kho: ${totalValue} USD
            `);
            break;
        case 4:
            prices.forEach((price, index) => {
                prices[index] = price * 0.9;
            });
            alert("Da cap nhat giam gia 10% cho toan bo san pham!");
            break;
        case 5:
            let keyword = prompt("Nhap ten san pham can tim:").toLowerCase();
            let results = [];
            names.forEach((name, index) => {
                if (name.toLowerCase().includes(keyword)) {
                    results.push(`${name} - Giá: ${prices[index]} - Kho: ${stocks[index]}`);
                };
            });
            if (results.length === 0) {
                alert(`
Khong tim thay san pham nao
                `);
            } else {
              alert(`
Ket qua tim kiem:
${results.join("\n")}
              `);
            };
            break;
        case 6:
            let statusStocks = stocks.map((item, index) => {
                let status = item > 0 ? "Con hang" : "Het hang";
                return (`${names[index]}: ${status} (${item})`);
            });
            alert(`
Bao cao ton kho:
${statusStocks.join("\n")}
            `);
            break;
        case 7:
            alert(`Da thoat chuong trinh, hen gap lai!`);
            out = 1;
            break;
        default:
            alert(`Lua chon khong hop le. Vui long nhap tu 1 den 7.`)
            break;
    };
};