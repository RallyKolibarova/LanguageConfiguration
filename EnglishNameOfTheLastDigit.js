function main(line) {
    let n = parseInt(line[0]);

    let result = englishName(n);

    console.log(result);

    function englishName(num) {

        let name;

        let temp = num % 10;

        if(num < 10) {
            if (num == 0){
                name = "zero";
            }

            if(num == 1){
                name = "one";
            }

            if(num == 2){
                name = "two";
            }

            if(num == 3){
                name = "three";
            }
            if(num == 4){
                name = "four";
            }
            if(num == 5){
                name = "five";
            }
            if(num == 6){
                name = "six";
            }
            if(num == 7){
                name = "seven";
            }
            if(num == 8){
                name = "eight";
            }
            if(num == 9){
                name = "nine";
            }
            else {

                if (temp == 0) {
                    name = "zero";
                }

                if (temp == 1) {
                    name = "one";
                }

                if (temp == 2) {
                    name = "two";
                }

                if (temp == 3) {
                    name = "three";
                }
                if (temp == 4) {
                    name = "four";
                }
                if (temp == 5) {
                    name = "five";
                }
                if (temp == 6) {
                    name = "six";
                }
                if (temp == 7) {
                    name = "seven";
                }
                if (temp == 8) {
                    name = "eight";
                }
                if (temp == 9) {
                    name = "nine";
                }
            }
        }
        console.log(name);
    }

}

let line = ['1024'];

main(line);