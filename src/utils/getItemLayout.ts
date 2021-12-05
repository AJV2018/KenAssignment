const getItemLayout = (data: any, index: number, height: number) => ({
    length: height,
    offset: height * index,
    index
});

export default getItemLayout;