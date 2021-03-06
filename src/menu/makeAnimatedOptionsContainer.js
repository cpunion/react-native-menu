module.exports = (React, ReactNative) => {
  const { Animated } = ReactNative;
  const TimerMixin = require('react-timer-mixin');
  const createClass = require('create-react-class');

  // A component that scales in when mounted.
  const AnimatedOptionsContainer = createClass({
    mixins: [TimerMixin],
    getInitialState() {
      return { scaleAnim: new Animated.Value(0.001) };
    },
    componentDidMount() {
      this.setTimeout(() => {
        Animated.timing(this.state.scaleAnim, {
          duration: 60,
          toValue: 1
        }).start();
      }, 16);
    },
    render() {
      return (
        <Animated.View style={[this.props.style, { transform: [ { scale: this.state.scaleAnim } ] }]}>
          { this.props.children }
        </Animated.View>
      );
    }
  });

  return AnimatedOptionsContainer;
};
