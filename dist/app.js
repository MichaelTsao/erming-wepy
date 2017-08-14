'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/treat', 'pages/protocol', 'pages/register', 'pages/index'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      }
    };
    _this.globalData = {
      userInfo: null,
      userToken: null,
      host: 'http://er.cx',
      userRange: 0
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      // this.testAsync()
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'showRange',
    value: function showRange(range) {
      return range.min + 'Hz------' + range.max + 'Hz';
    }
  }, {
    key: 'checkToken',
    value: function checkToken() {
      var token = _wepy2.default.getStorageSync('token');
      if (!token) {
        this.login();
      }
    }
  }, {
    key: 'login',
    value: function login() {
      var self = this;
      _wepy2.default.login({
        success: function success(res) {
          if (res.code) {
            _wepy2.default.request({
              url: self.globalData.host + '/user/login',
              data: {
                code: res.code
              },
              success: function success(d) {
                if (d.status === 200) {
                  _wepy2.default.setStorage({
                    key: 'token',
                    data: d.data.token
                  });
                  self.globalData.userRange = d.data.info.range;
                } else {
                  _wepy2.default.redirectTo({
                    url: 'protocol'
                  });
                }
              }
            });
          }
        }
      });
    }
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, undefined));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2VyVG9rZW4iLCJob3N0IiwidXNlclJhbmdlIiwidXNlIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyYW5nZSIsIm1pbiIsIm1heCIsInRva2VuIiwiZ2V0U3RvcmFnZVN5bmMiLCJsb2dpbiIsInNlbGYiLCJzdWNjZXNzIiwicmVzIiwiY29kZSIsInJlcXVlc3QiLCJ1cmwiLCJkIiwic3RhdHVzIiwic2V0U3RvcmFnZSIsImtleSIsImluZm8iLCJyZWRpcmVjdFRvIiwiY2IiLCJ0aGF0IiwiZ2V0VXNlckluZm8iLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQXlCRSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBdEJkQSxNQXNCYyxHQXRCTDtBQUNQQyxhQUFPLENBQ0wsYUFESyxFQUVMLGdCQUZLLEVBR0wsZ0JBSEssRUFJTCxhQUpLLENBREE7QUFPUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQjtBQVBELEtBc0JLO0FBQUEsVUFQZEMsVUFPYyxHQVBEO0FBQ1hDLGdCQUFVLElBREM7QUFFWEMsaUJBQVcsSUFGQTtBQUdYQyxZQUFNLGNBSEs7QUFJWEMsaUJBQVc7QUFKQSxLQU9DOztBQUVaLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBRlk7QUFHYjs7OzsrQkFFVTtBQUNUO0FBQ0Q7OzswQkFFS0MsQyxFQUFHO0FBQ1AsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxtQkFBVyxZQUFNO0FBQ2ZGLGtCQUFRLGtCQUFSO0FBQ0QsU0FGRCxFQUVHRixJQUFJLElBRlA7QUFHRCxPQUpNLENBQVA7QUFLRDs7Ozs7Ozs7Ozs7dUJBR29CLEtBQUtLLEtBQUwsQ0FBVyxDQUFYLEM7OztBQUFiQyxvQjs7QUFDTkMsd0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUdRRyxLLEVBQU87QUFDZixhQUFPQSxNQUFNQyxHQUFOLEdBQVksVUFBWixHQUF5QkQsTUFBTUUsR0FBL0IsR0FBcUMsSUFBNUM7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBSUMsUUFBUSxlQUFLQyxjQUFMLENBQW9CLE9BQXBCLENBQVo7QUFDQSxVQUFJLENBQUNELEtBQUwsRUFBWTtBQUNWLGFBQUtFLEtBQUw7QUFDRDtBQUNGOzs7NEJBRU87QUFDTixVQUFJQyxPQUFPLElBQVg7QUFDQSxxQkFBS0QsS0FBTCxDQUFXO0FBQ1RFLGlCQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEIsY0FBSUEsSUFBSUMsSUFBUixFQUFjO0FBQ1osMkJBQUtDLE9BQUwsQ0FBYTtBQUNYQyxtQkFBS0wsS0FBS3JCLFVBQUwsQ0FBZ0JHLElBQWhCLEdBQXVCLGFBRGpCO0FBRVhTLG9CQUFNO0FBQ0pZLHNCQUFNRCxJQUFJQztBQUROLGVBRks7QUFLWEYsdUJBQVMsaUJBQVVLLENBQVYsRUFBYTtBQUNwQixvQkFBSUEsRUFBRUMsTUFBRixLQUFhLEdBQWpCLEVBQXNCO0FBQ3BCLGlDQUFLQyxVQUFMLENBQWdCO0FBQ2RDLHlCQUFLLE9BRFM7QUFFZGxCLDBCQUFNZSxFQUFFZixJQUFGLENBQU9NO0FBRkMsbUJBQWhCO0FBSUFHLHVCQUFLckIsVUFBTCxDQUFnQkksU0FBaEIsR0FBNEJ1QixFQUFFZixJQUFGLENBQU9tQixJQUFQLENBQVloQixLQUF4QztBQUNELGlCQU5ELE1BTU87QUFDTCxpQ0FBS2lCLFVBQUwsQ0FBZ0I7QUFDZE4seUJBQUs7QUFEUyxtQkFBaEI7QUFHRDtBQUNGO0FBakJVLGFBQWI7QUFtQkQ7QUFDRjtBQXZCUSxPQUFYO0FBeUJEOzs7Z0NBRVdPLEUsRUFBSTtBQUNkLFVBQU1DLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBS2xDLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzVCLGVBQU8sS0FBS0QsVUFBTCxDQUFnQkMsUUFBdkI7QUFDRDtBQUNELHFCQUFLa0MsV0FBTCxDQUFpQjtBQUNmYixlQURlLG1CQUNQQyxHQURPLEVBQ0Y7QUFDWFcsZUFBS2xDLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCc0IsSUFBSXRCLFFBQS9CO0FBQ0FnQyxnQkFBTUEsR0FBR1YsSUFBSXRCLFFBQVAsQ0FBTjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQWhHMEIsZUFBS21DLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBwYWdlczogW1xuICAgICAgICAncGFnZXMvdHJlYXQnLFxuICAgICAgICAncGFnZXMvcHJvdG9jb2wnLFxuICAgICAgICAncGFnZXMvcmVnaXN0ZXInLFxuICAgICAgICAncGFnZXMvaW5kZXgnXG4gICAgICBdLFxuICAgICAgd2luZG93OiB7XG4gICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnbG9iYWxEYXRhID0ge1xuICAgICAgdXNlckluZm86IG51bGwsXG4gICAgICB1c2VyVG9rZW46IG51bGwsXG4gICAgICBob3N0OiAnaHR0cDovL2VyLmN4JyxcbiAgICAgIHVzZXJSYW5nZTogMFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKVxuICAgICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgIH1cblxuICAgIG9uTGF1bmNoKCkge1xuICAgICAgLy8gdGhpcy50ZXN0QXN5bmMoKVxuICAgIH1cblxuICAgIHNsZWVwKHMpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxuICAgICAgICB9LCBzICogMTAwMClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgdGVzdEFzeW5jKCkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMylcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfVxuXG4gICAgc2hvd1JhbmdlKHJhbmdlKSB7XG4gICAgICByZXR1cm4gcmFuZ2UubWluICsgJ0h6LS0tLS0tJyArIHJhbmdlLm1heCArICdIeidcbiAgICB9XG5cbiAgICBjaGVja1Rva2VuKCkge1xuICAgICAgbGV0IHRva2VuID0gd2VweS5nZXRTdG9yYWdlU3luYygndG9rZW4nKVxuICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICB0aGlzLmxvZ2luKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgd2VweS5sb2dpbih7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBpZiAocmVzLmNvZGUpIHtcbiAgICAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICAgIHVybDogc2VsZi5nbG9iYWxEYXRhLmhvc3QgKyAnL3VzZXIvbG9naW4nLFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgY29kZTogcmVzLmNvZGVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAndG9rZW4nLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkLmRhdGEudG9rZW5cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBzZWxmLmdsb2JhbERhdGEudXNlclJhbmdlID0gZC5kYXRhLmluZm8ucmFuZ2VcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgd2VweS5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAncHJvdG9jb2wnXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0VXNlckluZm8oY2IpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cbiAgICAgIH1cbiAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==