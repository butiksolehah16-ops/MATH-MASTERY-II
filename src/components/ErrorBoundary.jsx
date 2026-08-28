import { Component } from "react";
import "./ErrorBoundary.css";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Ralat tidak dijangka:", error, info);
  }

  handleReload = () => {
    window.location.href = "/";
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="error-boundary">
        <div className="error-boundary__card">
          <span className="error-boundary__emoji">😵</span>
          <h1 className="error-boundary__title">Alamak, ada yang tak kena</h1>
          <p className="error-boundary__body">
            Sesuatu ranap secara tidak dijangka. Progress kamu selamat — ia disimpan terus dalam peranti ni, bukan
            dalam skrin semasa. Cuba muat semula.
          </p>
          <button type="button" className="error-boundary__cta" onClick={this.handleReload}>
            Muat Semula
          </button>
        </div>
      </div>
    );
  }
}
