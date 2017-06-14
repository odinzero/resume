var _0x5696 = ["\x43\x6C\x69\x63\x6B\x20\x68\x65\x72\x65\x20\x74\x6F\x20\x64\x65\x63\x6F\x64\x65\x20\x74\x68\x69\x73\x20\x70\x61\x67\x65\x20\x21", "\x6C\x65\x6E\x67\x74\x68", "\x20", "", "\x73\x75\x62\x73\x74\x72\x69\x6E\x67", "\x74\x65\x78\x74", "\x23\x62\x61\x6E\x6E\x65\x72", "\x62\x61\x6E\x6E\x65\x72\x28\x29"];
var id, pause = 0, position = 0;
function banner() {
    var _0x3644x5, _0x3644x6, _0x3644x7 = _0x5696[0];
    _0x3644x6 = (60 / _0x3644x7[_0x5696[1]]) + 1;
    for (_0x3644x5 = 0; _0x3644x5 <= _0x3644x6; _0x3644x5++) {
        _0x3644x7 += _0x5696[2] + _0x3644x7
    }
    ;
    $(_0x5696[6])[_0x5696[5]](_0x5696[3] + _0x3644x7[_0x5696[4]](position, position + 60));
    if (position++ == _0x3644x7[_0x5696[1]]) {
        position = 0
    }
    ;
    id = setTimeout(_0x5696[7], 200)
}
banner()