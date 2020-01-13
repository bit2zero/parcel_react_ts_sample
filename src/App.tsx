import * as React from "react";
import Person from "./Person";

class App extends React.Component {

    render() {
        return this._makeRender();
    }

    private _makeRender() {
        const _sato: Person = new Person("Sato", 21);
        const _yamada: Person = new Person("Yamada", 25);
        const _kato: Person = new Person("Kato", 20);

        Person.remove(_yamada);
        const member: Person[] = Person.getList();

        return (
            <div>
                <div>{_sato.sayGreet()} I'm {_sato.age} years old.</div>
                <div>number of member is {member.length}.</div>
                <div>member: {member.join(", ")}</div>
                <div>{_kato.name} is {_kato.age} years old.</div>
            </div>
        );
    }
}

export default App;
