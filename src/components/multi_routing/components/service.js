import { BehaviorSubject, Subject } from 'rxjs';
export const subject = new BehaviorSubject('https://randomuser.me/api/portraits/women/22.jpg'); // 0 is the initial value


export const updateImage = (url) => {
    subject.next(url);
}