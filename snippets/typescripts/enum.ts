enum Category1 { Bio, Poet, Fiction };
enum Category2 { Bio=1, Poet, Fiction };
enum Category3 { Bio=5, Poet=8, Fiction=11 };

function driver() {
    let catPoet:Category1 = Category1.Poet;

    console.log(`category1Poet: ${catPoet}`);
    console.log(`category2Poet: ${Category2.Poet}`);
    console.log(`category3Poet: ${Category3.Poet}`);
    console.log(`category1[1]: ${Category1[1]}`);
    console.log(`category2[1]: ${Category2[1]}`);
    console.log(`category3[1]: ${Category3[1]}`);

    enum E { A=1, B, C=2, D=A+B }
    console.log(`E.A/B/C/D: ${E.A}, ${E.B}, ${E.C}, ${E.D}`);    // 1,2,2,3
    console.log(`E[E.A/B/C/D]: ${E[E.A]}, ${E[E.B]}, ${E[E.C]}, ${E[E.D]}`);  // A,C,C,D

    const enum CE {     // erased at compile time
        A = 1,
        B = A * 2
    }
    console.log(`const enums: ${CE.A}, ${CE.B}`);
}

declare enum AE {       // erased at compile time
    A = 1,
    B,
    C = 2
}

//driver();
//console.log(`ambient enums: ${AE.A}, ${AE.B}, ${AE.C}`);  // can't be used like this

export { Category1 as Category } 
