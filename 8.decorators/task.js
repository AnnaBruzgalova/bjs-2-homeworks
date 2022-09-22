function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = args.join(','); // получаем правильный хэш
        let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
        if (!objectInCache) { // если элемент не найден
            console.log("Из кэша: " + cache[objectInCache]); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
            return "Из кэша: " + cache[objectInCache];
        }

        let result = func(...args); // в кэше результата нет - придётся считать
        cache.push({
            result: result,
            hash: hash
        }); // добавляем элемент с правильной структурой
        if (cache.length > 5) {
            cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый) 
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
    return wrapper;
}

function debounceDecoratorNew(func, delay) {
    let timeout;
    let flag = false;
    wrapper.count = 0;

    function wrapper(...args) {
        wrapper.count++;
        if (!flag) {
            func.apply(this, args);
        }
        flag = true;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
            flag = false;
        }, delay);
    };
    return wrapper;
}