import ReactGA from 'react-ga';

ReactGA.initialize(process.env.GA_ID);

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};
