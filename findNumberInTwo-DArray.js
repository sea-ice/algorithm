// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。


function Find(target, array)
{
    // write code here
    let rows = array.length
    if (!rows) return false
    let columns = array[0].length
    if (!columns) return false
    return halfDivide(array, target, 0, 0, rows - 1, columns - 1)
}

function halfDivide(arr, t, sx, sy, ex, ey) {
    if (sx === ex && sy === ey) return false
    if (sx === ex) {
        for (let i = 0; i <= ex; i++) {
            for (let j = sy + 1; j <= ey; j++) {
                if (arr[i][j] === t) return true
            }
        }
        return false
    }
    if (sy === ey) {
        for (let i = sx + 1; i <= ex; i++) {
            for (let j = 0; j <= ey; j++) {
                if (arr[i][j] === t) return true
            }
        }
        return false
    }
    let halfX = Math.floor((sx + ex) / 2)
    let halfY = Math.floor((sy + ey) / 2)
    let midVal = arr[halfX][halfY]
    if (midVal === t) return true
    if (midVal > t) {
        return halfDivide(arr, t, sx, sy, halfX, halfY)
    } else {
        return halfDivide(arr, t, halfX, halfY, ex, ey)
    }
}