var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import PropTypes from "prop-types";
import hoistNonReactStatics from "hoist-non-react-statics";
import { StyleSheet } from "react-native";
var contextTypes = {
    getTheme: PropTypes.func
};
var withStyles = function (stylesCallback, themeName) {
    if (themeName === void 0) { themeName = function () { return 'default'; }; }
    return function (WrappedComponent) {
        var Wrapper = /** @class */ (function (_super) {
            __extends(Wrapper, _super);
            function Wrapper() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Wrapper.prototype.render = function () {
                var name = themeName(this.props);
                var theme = this.context.getTheme(name);
                var styles = StyleSheet.create(__assign({}, stylesCallback(theme, this.props)));
                return (React.createElement(WrappedComponent, __assign({}, this.props, { styles: styles, theme: theme })));
            };
            Wrapper.contextTypes = contextTypes;
            return Wrapper;
        }(React.PureComponent));
        return hoistNonReactStatics(Wrapper, WrappedComponent);
    };
};
export default withStyles;
