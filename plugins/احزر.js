const _0xdb0f29 = _0x36c4;
(function (_0x38a0bb, _0x589a4f) {
    const _0x3a334b = _0x36c4;
    const _0x55092c = _0x38a0bb();
    while (!![]) {
        try {
            const _0x4051f3 = parseInt(_0x3a334b(0x15)) / 0x1 + -parseInt(_0x3a334b(0xb)) / 0x2 * (parseInt(_0x3a334b(0xa)) / 0x3) + parseInt(_0x3a334b(0x10)) / 0x4 * (-parseInt(_0x3a334b(0x1c)) / 0x5) + parseInt(_0x3a334b(0x2)) / 0x6 * (-parseInt(_0x3a334b(0x6)) / 0x7) + parseInt(_0x3a334b(0x12)) / 0x8 * (-parseInt(_0x3a334b(0xf)) / 0x9) + -parseInt(_0x3a334b(0x4)) / 0xa + parseInt(_0x3a334b(0x1a)) / 0xb;
            if (_0x4051f3 === _0x589a4f) {
                break;
            } else {
                _0x55092c['push'](_0x55092c['shift']());
            }
        } catch (_0x2d29cc) {
            _0x55092c['push'](_0x55092c['shift']());
        }
    }
}(_0x4b4d, 0x8c908));

function _0x36c4(_0x45d52b, _0x4b4d78) {
    const _0x36c427 = _0x4b4d();
    _0x36c4 = function (_0x38a3aa, _0x35381e) {
        _0x38a3aa = _0x38a3aa - 0x0;
        let _0x387c1e = _0x36c427[_0x38a3aa];
        return _0x387c1e;
    };
    return _0x36c4(_0x45d52b, _0x4b4d78);
}
let timeout = 0xea60;
let poin = 0x3e8;
let handler = async (_0x3c596a, {
    conn: _0x57de8f,
    command: _0x15e0c9,
    usedPrefix: _0x31d28c
}) => {
    const _0x25a9c0 = _0x36c4;
    _0x57de8f[_0x25a9c0(0x8)] = _0x57de8f['tebakbendera'] ? _0x57de8f['tebakbendera'] : {};
    let _0x3e0d08 = _0x3c596a['chat'];
    if (_0x3e0d08 in _0x57de8f[_0x25a9c0(0x8)]) {
        _0x57de8f[_0x25a9c0(0x9)](_0x3c596a[_0x25a9c0(0x0)], _0x25a9c0(0xc), _0x57de8f[_0x25a9c0(0x8)][_0x3e0d08][0x0]);
        throw ![];
    }
    let _0x4c11c2 = await (await fetch('https://gist.githubusercontent.com/Kyutaka101/98d564d49cbf9b539fee19f744de7b26/raw/f2a3e68bbcdd2b06f9dbd5f30d70b9fda42fec14/guessflag'))[_0x25a9c0(0x7)]();
    let _0x4ad1ca = _0x4c11c2[Math[_0x25a9c0(0xe)](Math[_0x25a9c0(0x17)]() * _0x4c11c2[_0x25a9c0(0x11)])];
    let _0x37cb43 = ('*' + _0x15e0c9[_0x25a9c0(0x18)]() + _0x25a9c0(0x16) + (timeout / 0x3e8)['toFixed'](0x2) + _0x25a9c0(0x1b) + _0x31d28c + '*استسلم للاستسلام👾*\x0a ❐↞┇الـجـائـزة💵↞ ' + poin + _0x25a9c0(0x1))[_0x25a9c0(0x1e)]();
    _0x57de8f['tebakbendera'][_0x3e0d08] = [await _0x57de8f[_0x25a9c0(0x19)](_0x3c596a[_0x25a9c0(0x0)], _0x4ad1ca['img'], '', _0x37cb43, _0x3c596a), _0x4ad1ca, poin, setTimeout(() => {
        const _0xd9e57c = _0x36c4;
        if (_0x57de8f[_0xd9e57c(0x8)][_0x3e0d08]) _0x57de8f[_0xd9e57c(0x9)](_0x3c596a[_0xd9e57c(0x0)], _0xd9e57c(0x13) + _0x4ad1ca[_0xd9e57c(0x3)] + '*', _0x57de8f[_0xd9e57c(0x8)][_0x3e0d08][0x0]);
        delete _0x57de8f[_0xd9e57c(0x8)][_0x3e0d08];
    }, timeout)];
};

function _0x4b4d() {
    const _0x5adff3 = [' دولار\x0a*『𝐌𝐈𝐃𝐎﹝⚡﹞𝐁𝐎𝐓』*     ', '1326522zrrUIZ', 'name', '9081060EKrvDl', 'command', '21ggFzmZ', 'json', 'tebakbendera', 'reply', '3cpoRiU', '542844GTeBIP', '*في سؤال هنا يا ياورع 🐦‍⬛*', 'guessflag', 'floor', '9BzZBQY', '12820qPGAli', 'length', '4663832lagByn', 'الوقت خلص!\x0aالاجابه هي *', 'game', '908765sOMowA', '*\x0a  ❐↞┇الـوقـت⏳↞ *', 'random', 'toUpperCase', 'sendFile', '25029840HlpAEC', '* ثانيه\x0a  استخدم ', '285FAvvgx', 'tags', 'trim', 'chat'];
    _0x4b4d = function () {
        return _0x5adff3;
    };
    return _0x4b4d();
}
handler['help'] = [_0xdb0f29(0xd)];
handler[_0xdb0f29(0x1d)] = [_0xdb0f29(0x14)];
handler[_0xdb0f29(0x5)] = /^احزر/i;
export default handler;
