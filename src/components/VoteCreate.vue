<template>
  <div class="vote-create-container" >
        <div class="header">Create new vote</div>
        <div class="body">
            <div class="form-control">
                <label>Name</label>
                <input type="text" >
            </div>
            <div class="form-control">
                <label>Description</label>
                <input type="text" >
            </div>
        </div>
        <div class="footer">
            <button>Create</button>


        </div>
  </div>
</template>
<script>
  export default {
    name: 'vote-create',
    data () {
      return {
        id: '3455747',
        name: 'DRINK BEER',
        status: 'In progress',
        description: 'Go drink beer this thursday on 19-00. Legenda pub.',
        participantCount: 6,
        createdDate: new Date(),
        createdBy: "Test User",
        time: new Date()
      }
    },
    methods: {
        createVote() {
            // open route with vote details
        }
    }
  }
</script>
<style lang="scss">
@import "../assets/styles/default";

.vote-create-container {
    background: $bright-blue;
    border: 2px solid $dark-grey;
    border-radius: 5px;
    margin: $default-padding auto;
    max-width: 420px;

        .header {
            font-size: 1.2em;
            border-bottom: 2px solid $dark-grey;
            padding: $default-padding;
        }

        .body {
            display: flex;
            flex-direction: column;

            .form-control {
                display: flex;
                padding: 10px;
                line-height: 30px;
                font-size: 1.2em;
                label {
                    display: inline-block;
                    width: 100px;
                    color: $dark-grey;
                }

                input {
                    flex: 1;
                    border-bottom: 2px solid $dark-grey;
                }
            }   
        }

        .footer {
            height: 50px;
            display: flex;
            justify-content: center;

            button {
                height: 36px;
                background: $blue;
                border-radius: 3px;
                color: $white;
                text-transform: uppercase;
            }
        }
    
}
</style>