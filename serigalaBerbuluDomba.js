/* anda adalah seorang penggembala domba. di tengah sebuah padang rumput, anda menyuruh domba anda berbaris.
ada yang aneh, ternyata jumlahnya lebih 1. untungnya anda PRO, anda bisa mengetahui dimana serigala berbulu domba tersebut.
buatlah sebuah fungsi untuk memberitahu domba di depan serigala tersebut untuk lari.
jika serigala tersebut berada di depan anda, (di depan domba no 1) maka anda bisa mengusir serigala tersebut dengan "syuh syuh"


["domba", "domba", "domba", "domba", "domba", "serigala", "domba", "domba"]
    7        6         5        4       3                    2        1

    "oi, domba no 2, LARIIII"
*/

function serigalaBerbuluDomba(queue) {
    // console.log(queue);

    //   antrian += queue[i];
    for (let i = 0; i < queue.length; i++) {
        if (queue[queue.length - 1] === "serigala") {
            return `syuh syuh`;
        } else {
            let index = queue.findIndex((x) => x == "serigala");
            // console.log(index);
            return `oi, domba no ${queue.length - index - 1}, LARIIIII"`
        }
    }

}


console.log(serigalaBerbuluDomba(["domba", "domba", "domba", "domba", "domba", "serigala", "domba", "domba"]))//"oi, domba no 2, LARIIII"
console.log(serigalaBerbuluDomba(["domba", "serigala", "domba", "domba", "domba", "domba", "domba"]))
//"oi, domba no 5, LARIIII"
console.log(serigalaBerbuluDomba(["serigala", "domba", "domba", "domba", "domba", "domba", "domba"])); 
// "oi, domba no 6, LARIIII"
console.log(serigalaBerbuluDomba(["domba", "serigala", "domba"]))
// "oi, domba no 1, LARIIII")
console.log(serigalaBerbuluDomba(["domba", "domba", "serigala"]))
// "syuh syuh"
