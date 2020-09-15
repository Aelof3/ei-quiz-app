export default class QUIZAppQuestion {
    constructor( data ){
        this.question = data.question || '';
        this.answers = data.answers || [];
        this.correctAnswer = data.correctAnswer || '';
        this.encoded = data.encoded || null;
        this.attempts = 0;
        this.completeDelay = 2000;
        this.correct = false;
        this.html = {}
        this.init( );
    }

    init( ){
        this.shuffleArray( this.answers );
        this.buildHtml( );
        this.setupEventHandlers( );
        this.onCreate( );
    }

    checkType( a ){
        let s1 = atob(a.split(" ").map( c => String.fromCharCode(parseInt(`0x${c.toString(16)}`)) ).join("").split(" ").map( c => String.fromCharCode(parseInt(`0x${c}`).toString())).join(""));
        return s1;
    }

    setupEventHandlers( ){
        // on submit check answer
        this.html.body.onsubmit = ( e ) => {
            e.preventDefault( );
            let formData = new FormData( this.html.body );
            this.checkAnswer( formData.get( "answer" ) );
        }
    }

    buildHtml( ){
        this.html.body = this.h2e( `<form class="question hidden">
                                        <h3>${this.question}</h3>
                                    </form>`);

        this.html.answerWrap = this.h2e(`<div class="answers"></div>`);

        this.html.answers = [];

        for ( let answer of this.answers ){
            let a = this.h2e(`<label><input name="answer" type="radio" value="${answer}" class="answer" />${answer}</label>`);
            this.html.answers.push( a );
            this.html.answerWrap.appendChild( a );
        }

        this.html.submitButton = this.h2e(`<button type="submit">Submit</button>`);
        this.html.body.appendChild( this.html.answerWrap );
        this.html.body.appendChild( this.html.submitButton );
        this.html.body.setAttribute( "class","question" );
    }

    checkAnswer( userAnswer ){
        this.userAnswer = userAnswer;
        // check the answer against the user answer
        if ( userAnswer === this.checkType( this.correctAnswer ) ) {
            this.onCorrectAnswer( );
        } else {
            this.onIncorrectAnswer( );
        }
    }

    onCreate( ){
        // on create hook
    }

    onComplete( ){
        // on question completed hook
        this.send( 'questionCompleted', { correct: this.correct } )
    }

    onCorrectAnswer( ){
        // on correct answer hook
        this.correct = true;
        this.showAnswer( ()=>{this.onComplete( )} )
    }

    onIncorrectAnswer( ){
        // on incorrect answer hook
        this.correct = false;
        this.showAnswer( ()=>{this.onComplete( )} )
    }

    showAnswer( callback ){
        this.html.body.setAttribute( "class", "question fadeForm" );
        this.html.answers.find( el => el.firstChild.value === this.checkType( this.correctAnswer ) ).setAttribute( "class","correctAnswer" );
        if ( this.userAnswer !== undefined ) {
            let el = this.html.answers.find( el => el.firstChild.value === this.userAnswer && el.firstChild.value !== this.checkType( this.correctAnswer ) );
            if ( el !== undefined ) el.setAttribute( "class","incorrectAnswer" );
        }
        this.html.submitButton.setAttribute( "disabled", true );

        if ( typeof callback === "function" ) setTimeout(()=>{callback()},this.completeDelay);
    }

    send( evt,data ){
        window.dispatchEvent( new CustomEvent( evt, { detail: data } ) );
    }

    shuffleArray(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
    }

    h2e( html ) {
        let template = document.createElement( 'template' );
        html = html.trim( );
        template.innerHTML = html;
        return template.content.firstChild;
    }
}