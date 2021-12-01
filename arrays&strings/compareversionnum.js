function compareVerNum(v1, v2){
    v1 = v1.split('.')
    v2 = v2.split('.')
    
    let range = Math.max(v1.length, v2.length)


    for (let i = 0; i < range; ++ i) {
        v1[i] = parseInt(v1[i], 10);
        v2[i] = parseInt(v2[i], 10);
        if (v1[i] > v2[i]) return 1;
        if (v1[i] < v2[i]) return -1;        
    }
    return v1.length == v2.length ? 0: (v1.length < v2.length ? -1 : 1);
}

console.log(compareVerNum("1.0.1", "1"))