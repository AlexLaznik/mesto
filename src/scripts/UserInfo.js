export class UserInfo {
    constructor(nameSelector, jobSelector) {
        this._name = nameSelector;
        this._job = jobSelector;
    }

    getUserInfo() {
        const data = {};
        data.name = this._name.textContent;
        data.job = this._job.textContent;
        return data;
    }

    setUserInfo({ name, job }) {
        this._name.textContent = name;
        this._job.textContent = job;
    }
}