let seq1 = 0
let seq2 = 0
let seq3 = 0
let n=6
for(let i=0; i<=n; i++){
    if(i==0||i==1){
        seq1=1
    }else{
        seq3=seq2
        seq2=seq1
        seq1=seq2+seq3
    }

}
console.log(seq1)