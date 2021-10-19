import { isNullOfUndefined } from '../utils/stringUtils';

const getUrlWithQuery = ({ queryObject, defaultURL, queryNameArr }) => {
    const URLArr = [defaultURL];

    for (const queryName of queryNameArr) {
        if (!isNullOfUndefined(queryObject[queryName])) {
            if (URLArr && URLArr.length === 1) {
                URLArr.push('?');
            } else {
                URLArr.push('&');
            }

            URLArr.push(`${queryName}=${queryObject[queryName]}`);
        }
    }

    const resultUrl = URLArr.join('');

    return resultUrl;
};
export const ACCOUNT_URL = {
    checkToken: function (): string {
        return `/auth/token`;
    },
    login: function (): string {
        return `/auth/login`;
    },
};

export const BLOG_URL = {
    blog: function (): string {
        return '/blog';
    },
    pageNation: function (queryObject): string {
        const defaultURL = '/blog/post';
        const queryNameArr = ['page', 'pageSize'];
        const resultURL = getUrlWithQuery({ queryObject, defaultURL, queryNameArr });

        return resultURL;
    },
    searchUrl: function (searchUrl: string): string {
        const resultURL = `/blog/post/${searchUrl}`;
        return resultURL;
    },
    searchTag: function (queryObject, tagName: string): string {
        const defaultURL = `/blog/post/tag/${tagName}`;
        const queryNameArr = ['page', 'pageSize'];
        const resultURL = getUrlWithQuery({ queryObject, defaultURL, queryNameArr });

        return resultURL;
    },
    trending: function (queryObject): string {
        const defaultURL = '/blog/views';
        const queryNameArr = ['page', 'pageSize'];
        const resultURL = getUrlWithQuery({ queryObject, defaultURL, queryNameArr });

        return resultURL;
    },
};

export const TAG_URL = {
    tag: function (): string {
        return '/blog/tag';
    },
    searchTagName: function (tagName: string): string {
        return `/blog/tag/${tagName}`;
    },
};

export const SERIES_URL = {
    series: function (): string {
        return '/blog/series';
    },
    searchSeriesName: function (seriesName: string): string {
        return `/blog/series/${seriesName}`;
    },
};
