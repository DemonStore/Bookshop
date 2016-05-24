module.exports = {
    name: 'BookSchema',
    schema: {
        title: { type: String, required: true, trim: true },
        author: { type: String, required: true, trim: true },
        description: { type: String, required: true, trim: true },
        modified: { type: Date, default: Date.now }
    }
};
