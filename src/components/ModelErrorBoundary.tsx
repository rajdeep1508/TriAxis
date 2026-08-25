import { Component, type ReactNode } from "react";

interface Props { fallback: ReactNode; children: ReactNode; }
interface State { errored: boolean; }

export default class ModelErrorBoundary extends Component<Props, State> {
  state: State = { errored: false };
  static getDerivedStateFromError() { return { errored: true }; }
  render() {
    if (this.state.errored) return this.props.fallback;
    return this.props.children;
  }
}