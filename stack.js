function formatStringer(s) {
    let ref = [];
    for (let i of s) {
        if (i === '(') {
            ref.push(i);
        } else if (i === '{') {
            ref.push(i);
        } else if (i === '[') {
            ref.push(i);
        } else if (i === ')') {
            if (ref[ref.length - 1] === '(') ref.pop();
            else return false;
        } else if (i === '}') {
            if (ref[ref.length - 1] === '{') ref.pop();
            else return false;
        } else if (i === ']') {
            if (ref[ref.length - 1] === '[') ref.pop();
            else return false;
        }
    }
    return (ref.length === 0)? true : false;
}