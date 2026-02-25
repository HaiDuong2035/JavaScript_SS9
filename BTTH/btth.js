const squad = [
    ["Nguyen Van A", 10, "FW"],
    ["Tran Van B", 5, "MF"],
    ["Le Van C", 2, "DF"],
    ["Pham Van D", 12, "FW"],
    ["Hoang Van E", 0, "GK"],
    ["Dang Van F", 7, "MF"]
];

let choice = 0;
let out = 0;
let findName;
let findPos;

while (out === 0) {
    choice = +prompt(`
--QUAN LY DOI BONG--
1: Xem danh sach cau thu
2: Tim kiem cau thu
3: Loc cau thu theo vi tri
4: Thong ke tong ban thang
5: Kiem tra hieu suat
0: Thoat chuong trinh
    `);
    switch (choice) {
        case 1:
            const listSquad = (list) => {
                list.forEach((item) => {
                    console.log(`${item[0]} (${item[2]}) : ${item[1]}`);
                });
            };
            listSquad(squad);
            break;
        case 2:
            findName = prompt(`Nhap ten cau thu`);
            const findMember = (list, name) => {
                const canFind = list.find(item => item[0] === name);
                if (canFind) {
                    console.log(`${canFind[0]} (${canFind[2]}) : ${canFind[1]}`);
                } else {
                    console.log(`Khong tim thay cau thu`);
                }
            };
            findMember(squad, findName);
            break;
        case 3:
            findPos = prompt(`Nhap vi tri`);
            const findPlayer = (list, pos) => {
                const listFind = list.filter(item => item[2] === pos);
                if (listFind.length !== 0) {
                    for (let i = 0; i < listFind.length; i++) {
                        console.log(listFind[i]);
                    }
                } else {
                    console.log(`Khong tim thay cau thu o vi tri nay`);
                }
            };
            findPlayer(squad, findPos);
            break;
        case 4:
            totalWin = squad.reduce((acc, curent) => {
                return (acc += curent[1]);
            },0);
            console.log("Tong so ban thang hien tai la: ",totalWin);
            break;
        case 5:
            let isDone = squad.some((player) => {
                return player[1] == 0;
            });
            if (isDone) {
                console.log("Co cau thu chua ghi ban");
            } else {
                console.log("Tat ca cau thu deu ghi ban");
            };
            break;
        case 0:
            console.log(`Ket thuc chuong trinh`);
            out = 1;
            break;
        default:
            alert(`Lua chon khong hop le`);
            break;
    }
}