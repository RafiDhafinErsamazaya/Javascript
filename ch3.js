const getAngkaTerbesarKedua = (dataAngka) => {
    if (!Array.isArray(dataAngka)) {
      return "ini bukan array";
    } else if (Array.isArray(dataAngka)) {
      if (dataAngka.length === 0) {
        return "array kosong";
      } else if (dataAngka.length === 1) {
        return `datanya cuma satu, nih angkanya ${dataAngka[0]}`;
      } else {
        dataAngka.sort((a, b) => {
            console.log(`b ${b}, a ${a}`)
            return b-a
        });
        console.log("angka ",dataAngka)
        let a = 1;
        while (dataAngka[a - 1] === dataAngka[a]) {
          a++;
        }
        return dataAngka[a];
      }
    }
  };
  
  const dataAngka = [9, 9, 9, 7, 8, 5];
  const dataAngka2 = [];
  
  console.log(getAngkaTerbesarKedua(dataAngka));
  console.log(getAngkaTerbesarKedua({}));
  console.log(getAngkaTerbesarKedua([]));
  console.log(getAngkaTerbesarKedua([1]));
  console.log(getAngkaTerbesarKedua(2));
  console.log(getAngkaTerbesarKedua());
  console.log(getAngkaTerbesarKedua("2"));
  console.log(getAngkaTerbesarKedua([2, "x"]));