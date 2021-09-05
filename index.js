function sayHello(x,y) {
    if (typeof x != 'string' && typeof y != 'string')
    {
        throw new Error('Both variables must be strings');
    }
    return x + y;
}