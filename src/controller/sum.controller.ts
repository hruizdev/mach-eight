export class SumController 
{
    getSum = (list: number[], sum: number) =>
    {
        const map: { [key: number]: number; } = {};
        const result: number[][] = [];
        list.forEach((item: number, index: number) => 
        {
            if (map[item] !== undefined) result.push([map[item], list[index]]); // map.1
            else map[sum - item] = list[index];
        });
        return result;
    };

    getSumSolution2 = (list: number[], sum: number) =>
    {
        const map = new Set(list);
        const result: number[][] = [];
        list.forEach((item) => 
        {
            if (map.has(sum - item)) 
            {
                result.push([item, (sum - item)]);
                map.delete(item);
                map.delete((sum - item));
            }
        });
        return result;
    };
}