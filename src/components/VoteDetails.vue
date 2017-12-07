<template>
  <div class="vote-container" >
        <div class="header">{{name}}</div>
        <div class="body">
            <section class="left-section">
                <div class="description">
                    {{description}}
                </div>
                <div class="votes-count">
                    <div class="table">
                        <div class="vote-yes">
                           <h4>Voted "YES"</h4>
                           <div class="vote-list">
                                <p>User Vasia</p>
                                <p>User Ivan</p>
                                <p>User Seryoga</p>
                                <p>User Anton</p>
                           </div>
                        </div>
                        <div class="vote-no">
                            <h4>Voted "NO"</h4>
                           <div class="vote-list">
                                <p>User Igor</p>
                                <p>User Afanasii</p>
                                <p>User Dimon</p>
                                <p>User Vova</p>
                           </div>
                        </div>
                    </div>
                </div>
                <div class="status">
                   <span>Status - </span> <span>{{status}}</span>
                </div>
                <div class="info">
                    <span>Created by </span><span>{{createdBy}}</span><span> on </span><span>{{createdDate | formatDate}}</span>
                </div>
            </section>
            <section class="right-section">
                <div class="buttons-container">
                      <button class="btn-yes" v-on:click="confirmVote">
                            <check-circle-outline-icon />
                      </button>
                      <button class="btn-no" v-on:click="dismissVote">
                            <close-circle-outline-icon />
                      </button>
                </div>
            </section>
        </div>
  </div>
</template>

<script>
import CheckCircleOutlineIcon from 'vue-material-design-icons/check-circle-outline'
import CloseCircleOutlineIcon from 'vue-material-design-icons/close-circle-outline'

  export default {
    name: 'vote-details',
    components: { CheckCircleOutlineIcon, CloseCircleOutlineIcon },
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
    filters: {
        formatDate (value) {
            if (!value) return ''
            return `${value.getDate()}.${value.getMonth() + 1}.${value.getFullYear()}`
        }
    },
    methods: {
        confirmVote() {
            // open route with vote details
        },
        dismissVote() {

        }
    }
  }
</script>
<style lang="scss">
@import "../assets/styles/default";

.vote-container {
    background: $bright-blue;
    border: 2px solid $dark-grey;
    border-radius: 5px;
    margin: $default-padding;

        .header {
            font-size: 1.2em;
            border-bottom: 2px solid $dark-grey;
            padding: $default-padding;
        }

        .body {
            display: flex;

            section {
                width: 50%;

                &.left-section {
                    border-right: 2px solid $dark-grey;

                    .description {
                        font-size: 2em;
                    }

                    .votes-count {
                        margin: $default-padding / 2;

                        .table {
                            display: flex;
                            border: 1px solid $dark-grey;

                            .vote-yes,
                            .vote-no {
                                width: 50%;
                                
                                &:first-of-type {
                                    border-right: 1px solid $dark-grey;
                                }

                                h4 {
                                    border-bottom: 1px solid $dark-grey;
                                    padding: 0 10px;
                                    margin: 0;
                                    line-height: 2em;
                                }

                                .vote-list {
                                    p {
                                        margin-left: 10px;
                                        text-decoration: underline;
                                    }
                                }
                            }
                        }
                    }

                    .status,
                    .info {
                        margin: $default-padding / 2;
                    }
                }

                &.right-section {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .buttons-container {
                        button {
                            min-width: 60px;
                            min-height: 56px;
                            border-radius: 5px;

                            &.btn-yes {
                                background: $green;
                            }
                            &.btn-no {
                                background: $red;
                            }
                        }
                    }
                }
            }

            
        }

    
}
</style>