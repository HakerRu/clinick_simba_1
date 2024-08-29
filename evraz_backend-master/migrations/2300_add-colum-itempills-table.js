exports.shorthands = undefined;

exports.up = pgm => {
    pgm.addColumns('item_pills_bd', {
        price: {
            type: 'BIGINT',
            comment: 'цена',
        },
    }, {
        ifNotExists: true,
    });
};

exports.down = pgm => {
};