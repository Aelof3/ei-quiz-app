import QUIZAppQuestion from './QUIZAppQuestion.js';

export default class QUIZAppQuiz {
    constructor( data ){
        this.questions = data.questions || [];
        this.questionData = data.questionData || [];
        this.userAnswers = [];
        this.quizStarted = false;
        this.quizFinished = false
        this.questionNumber = 0;
        this.score = 0;
        this.startQuiz( );
    }

    init( ){
        this.quizStarted = true;
        this.shuffleArray( this.questionData );
        this.setupEventHandlers( );
        this.loadNextQuestion( );
        this.onCreate( );
    }

    startQuiz( ){
        let startButton = this.h2e( `<button tabindex="1" class="startbutton">START</button>`);
        this.el = document.querySelectorAll( "main" )[0];
        this.el.appendChild( startButton );
        startButton.onclick = ( e )=>{
            this.init( );
        }
    }

    setupEventHandlers( ){
        window.addEventListener( "questionCompleted", ( e )=>{
            this.loadNextQuestion( );
        }, false );
    }

    send( evt,data ){
        window.dispatchEvent( new CustomEvent( evt, { detail: data } ) );
    }

    loadNextQuestion( ){
        // clear out html of quiz body
        // add question html
        if ( this.questionNumber < this.questionData.length ) {
            let q = new QUIZAppQuestion( this.questionData[this.questionNumber] );
            this.questions.push( q );
            this.render( q );
            this.questionNumber++;
        } else {
            this.onFinish( );
        }
    }

    shuffleArray(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
    }

    onCreate( ){
        // on create hook
    }

    onFinish( ){
        // on quiz finish hook
        this.quizFinished = true;
        this.render( );
        console.log( this );
    }

    h2e( html ) {
        let template = document.createElement( 'template' );
        html = html.trim( );
        template.innerHTML = html;
        return template.content.firstChild;
    }

    renderDashboard( ){
        let dashboard = this.h2e( `<div class="dashboard"></div>`);
        let score = this.h2e( `<p>Score: ${this.questions.reduce( (a,b) => (b.correct) ? a+1 : a,0)} out of a possible ${this.questionData.length}</p>`)
        let currentQuestion = this.h2e( `<p>Question: ${this.questionNumber + 1} out of ${this.questionData.length}</p>`);

        dashboard.appendChild( score );
        dashboard.appendChild( currentQuestion );

        this.el.appendChild( dashboard );
    }

    renderFinishedDashboard( ){
        let dashboard = this.h2e( `<div class="dashboard"><h2>Quiz Finished</h2></div>` );
        let replay = this.h2e( `<button tabindex="1" class="replay">Replay?</button>` );
        replay.onclick = ( e )=>{
            e.preventDefault( );
            location.reload( );
        }

        let score = this.h2e( `<p>Score: ${this.questions.reduce( (a,b) => (b.correct) ? a+1 : a,0)}/${this.questionData.length}, or ${Math.floor( this.questions.reduce( (a,b) => (b.correct) ? a+1 : a,0) / this.questionData.length * 100 )}%</p>`);

        dashboard.appendChild( score );
        dashboard.appendChild( replay );

        this.el.appendChild( dashboard );
    }

    render( question = null ){
        // render quiz in html
        this.el.innerHTML = '';
        
        if ( this.quizStarted && !this.quizFinished ) {
            this.renderDashboard( );
            this.el.appendChild( question.html.body );
        }

        if ( this.quizFinished ) this.renderFinishedDashboard( );
    }
}