module.exports = function toReadable(number) {
    if (number === 0) return 'zero';
    if (number < 10) return digitToReadable(number);
    if (number >= 10 && number < 20) return tensToReadable(number);
    let result = [];
    if (number >= 20 && number < 1000) {
        let hundreds = Math.trunc(number / 100);
        if (hundreds > 0) {
            result.push(digitToReadable(hundreds) + ' hundred')
        }
        if ((number - hundreds * 100) >= 10 && (number - hundreds * 100) < 20) {
            result.push(' ' + tensToReadable((number - hundreds * 100)));
        }
        let tens = Math.trunc((number - hundreds * 100) / 10);
        if (tens >= 2) {
            if (hundreds > 0) result.push(' ');
            result.push(overTenToReadable(tens));
        }
        let digit = Math.trunc(number - hundreds * 100 - tens * 10)
        if (digit > 0 && (tens >= 2 || tens === 0)) {
            result.push(' ' + digitToReadable(digit));
        }

        return result.join('');
    }

    function tensToReadable(number) {
        switch (number) {
            case 10:
                return 'ten';
            case 11:
                return 'eleven';
            case 12:
                return 'twelve';
            case 13:
                return 'thirteen';
            case 14:
                return 'fourteen';
            case 15:
                return 'fifteen';
            case 16:
                return 'sixteen';
            case 17:
                return 'seventeen';
            case 18:
                return 'eighteen';
            case 19:
                return 'nineteen';
        }
    }

    function overTenToReadable(number) {
        switch (number) {
            case 2:
                return 'twenty';
            case 3:
                return 'thirty';
            case 4:
                return 'forty';
            case 5:
                return 'fifty';
            case 6:
                return 'sixty';
            case 7:
                return 'seventy';
            case 8:
                return 'eighty';
            case 9:
                return 'ninety';
        }
    }


    function digitToReadable(digit) {
        switch (digit) {
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            case 7:
                return 'seven';
            case 8:
                return 'eight';
            case 9:
                return 'nine';
        }
    }
}

