class Helper {
    checkFormat2(value) {
        if (typeof(value) === 'number') {
            let val = (value / 1).toFixed(0).replace('.', ',')
            return 'Rp.' + val.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
        return value;

    }
    checkFormat(value) {
        if (typeof(value) === 'number') {
            let val = (value / 1).toFixed(0).replace(',', '.')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
        return value;

    }
    copyToClipboard(id) {
        let range = document.createRange();
        range.selectNode(document.getElementById(id));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
    }
    changeDate(date) {
            const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
            let dump = new Date(date)
            let dd = dump.getDate()
            if (dd < 10) dd = '0' + dd
            let mm = month[dump.getMonth()]
            let yyyy = dump.getFullYear()
            let day = days[dump.getDay()]
            return day + ', ' + dd + ' ' + mm + ' ' + yyyy
        }
        // changeDateTime (date) {
        //     const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        //     let dump = new Date(date)
        //     let dd = dump.getDate()
        //     if (dd < 10) dd = '0' + dd
        //     let mm = month[dump.getMonth()]
        //     let hh = dump.getHours()
        //     if (hh < 10) hh = '0' + hh
        //     let mn = dump.getMinutes()
        //     if (mn < 10) mn = '0' + mn
        //     let yyyy = dump.getFullYear();
        //     if (yyyy < 10) mn = '0' + yyyy;
        //     return dd + ' ' + mm + ' ' + ' ' + yyyy + ' ' + hh + ':' + mn + ' WIB'
        // }
        // changeDateTime2(date) {
        //     const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        //     const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
        //     let dump = new Date(date)
        //     let day = days[dump.getDay()]
        //     let dd = dump.getDate()
        //     if (dd < 10) dd = '0' + dd
        //     let mm = month[dump.getMonth()]
        //     let hh = dump.getHours()
        //     if (hh < 10) hh = '0' + hh
        //     let mn = dump.getMinutes()
        //     if (mn < 10) mn = '0' + mn
        //     let yyyy = dump.getFullYear();
        //     if (yyyy < 10) mn = '0' + yyyy;
        //     return day + ', ' + dd + ' ' + mm + ' ' + ' ' + yyyy + ' ' + hh + ':' + mn + ' WIB'
        // }
    dateState(date) {
        const month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
        let dump = new Date(date)
        if (!isNaN(Date.parse(date))) {
            let yyyy = dump.getFullYear();
            if (yyyy < 10) yyyy = '0' + yyyy;
            let dd = dump.getDate()
            if (dd < 10) dd = '0' + dd
            let mm = month[dump.getMonth()]
            return dd + ' ' + mm + ' ' + yyyy
        } else {
            return date
        }
    }
    dateList(date) {
        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des']
        let dump = new Date(date)
        if (!isNaN(Date.parse(date))) {
            let yyyy = dump.getFullYear();
            if (yyyy < 10) yyyy = '0' + yyyy;
            let dd = dump.getDate()
            if (dd < 10) dd = '0' + dd
            let mm = month[dump.getMonth()]
            return dd + ' ' + mm + ' ' + yyyy
        } else {
            return date
        }
    }
    changeDateRegister(date) {
            let dump = new Date(date)
            let yyyy = dump.getFullYear()
            if (yyyy < 10) yyyy = '0' + yyyy
            let dd = dump.getDate()
            if (dd < 10) dd = '0' + dd
            let mm = dump.getMonth() + 1
            if (mm < 10) mm = '0' + mm
            let hh = dump.getHours()
            if (hh < 10) hh = '0' + hh
            let mn = dump.getMinutes()
            if (mn < 10) mn = '0' + mn
            let n = dump.getSeconds();
            if (n < 10) n = '0' + n
            return yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + mn + ':' + n
        }
        // changeTime (val) {

    // }

    changeToNumber(value) {
        return parseInt(value.split('.').join(''))
    }
    getFirstValue(value) {
        let val = value.toString()
        return val.substr(0, val.length - 3)
    }
    changeSpaceToUnderscore(value) {
        return value.split(' ').join('_')
    }
    getLastValue(value) {
        let val = value.toString()
        return val.substr(val.length - 3, 3)
    }
    changeDateDetail(date) {
        const month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
        let dump = new Date(date)
        let dd = dump.getDate()
        if (dd < 10) dd = '0' + dd
        let mm = month[dump.getMonth()]
        let yyyy = dump.getFullYear()
        let day = days[dump.getDay()]
        let hh = dump.getHours()
        if (hh < 10) hh = '0' + hh
        let mn = dump.getMinutes()
        if (mn < 10) mn = '0' + mn
        return day + ', ' + dd + ' ' + mm + ' ' + yyyy + ', ' + hh + ':' + mn + ' WIB'
    }
    formatDate(date) {
        const month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
        let dump = new Date(date)
        let dd = dump.getDate()
        if (dd < 10) dd = '0' + dd
        let mm = month[dump.getMonth()]
        let yyyy = dump.getFullYear()
        return dd + ' ' + mm + ' ' + yyyy
    }
    substrImgBase64(index) {
        let val = index.toString()
        const i = val.substr(5, 1)
        if (i === 'a') {
            return val.substr(37, val.length - 37)
        } else {
            if (val.substr(11, 1) === 'p') {
                return val.substr(22, val.length - 22)
            } else {

                return val.substr(23, val.length - 23)
            }
        }
    }
    tabSwipe(index) {
        let indexTab = localStorage.getItem('indexTabs');
        let tabswipe = document.getElementById('tabswipe')
        if (index === 0) {
            if (indexTab > index) tabswipe.scrollLeft -= 100;
            else tabswipe.scrollLeft += 10;
        }
        if (index === 1) {
            if (indexTab > index) tabswipe.scrollLeft -= 150;
            else tabswipe.scrollLeft += 80;
        }
        if (index === 2) {
            if (indexTab > index) tabswipe.scrollLeft -= 120;
            else tabswipe.scrollLeft += 110;
        }
        if (index === 3) {
            if (indexTab > index) tabswipe.scrollLeft -= 120;
            else tabswipe.scrollLeft += 90;
        }
        if (index === 4) {
            if (indexTab > index) tabswipe.scrollLeft -= 100;
            else tabswipe.scrollLeft += 80;
        }
        if (index === 5) {
            if (indexTab > index) tabswipe.scrollLeft -= 20;
            else tabswipe.scrollLeft += 70;
        }
        if (index === 6) {
            if (indexTab > index) tabswipe.scrollLeft -= 0;
            else tabswipe.scrollLeft += 100;
        }
        localStorage.setItem('indexTabs', index);
    }
}

export default Helper