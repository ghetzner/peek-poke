var local_storage = {};

function poke(key, value) {
    key += 'unique';
    local_storage[key] = value;
}

function peek(key) {
    if (key !== null) {
        key += 'unique';
        return (local_storage[key]);
    }
}