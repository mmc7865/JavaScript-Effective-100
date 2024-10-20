// Project Restuarent v 1.0
let order;
do {
    console.log('1-Chineese\n2-Indian\n3-Italian\n4-Russian\n5-Spanish\n6-Exit');
     order = +prompt('Order Please')
if(order >= 1 || order < 6) {
    switch (order) {
        case 1:
            console.log('1-Hakka-Noodles\n2-Chowmeen\n3-Tofu\n4-Spring Rolls\n5-Back to Main Menu');
            let order1 = +prompt('Please choose item')
            if (order1 == 5) {
                break;
            }
            break;
        case 2:
            console.log('1-Chhole Bhatoore\n2-Dosa\n3-Rasgulla\n4-Samosa\n5-Back to Main Menu');
            let order2 = +prompt('Please choose item')
            if (order2 == 5) {
                break;
            }
            break;
        case 3:
            console.log('1-Napoletana Pizza \n2-Risotto \n3-Fiorentina Steak\n4-Polenta\n5-Back to Main Menu');
            let order3 = +prompt('Please choose item')
            if (order3 == 5) {
                break;
            }
            break;
        case 4:
            console.log('1-Borscht\n2-Pirozhki\n3-Pelmeni\n4-Shashlik\n5-Back to Main Menu');
            let order4 = +prompt('Please choose item')
            if (order4 == 5) {
                break;
            }
            break;
        case 5:
            console.log('1-Patatas bravas\n2-Gazpacho\n3-Jamón\n4-Churros\n5-Back to Main Menu');
            let order5 = +prompt('Please choose item')
            if (order5 == 5) {
                break;
            }
            break;
    }
    
} else{
    console.log('Exit');
    
}
} while (order != 6);