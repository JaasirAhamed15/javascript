const names=['youtube','facebook','instagram','Amazon','Netflix','Spotify','LinkedIn'];

for(const n of names){//of is only used for the arrays
    console.log(n,"\n");
}

const symbols={
    yt: 'youtube',
    fb: 'facebook',
    ig: 'instagram',
    amz: 'Amazon',
    nf: 'Netflix',
    sp: 'Spotify',
    ln: 'LinkedIn'
}

for(const n in symbols){//in is only used for the objects
    console.log(`key is: ${n} and value: ${symbols[n]}`);
}