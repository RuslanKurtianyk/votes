<template>
  <div class="vote-list-item-container" v-on:click="openVote">
    <div class="item-wrapper">
        <div class="header">{{name}}</div>
        <div class="body">
            <div class="description">
                {{description}}
            </div>
            <div class="info">
                <span>Created by </span><span>{{createdBy}}</span><span> on </span><span>{{createdDate | formatDate}}</span>
            </div>
        </div>
        <div class="footer">
            <section class="participants-section">
                <emoticon-cool-icon /><span> - {{participantCount}}</span>
            </section>
            <section class="status-section">
                <span>Status - </span> <span>{{status}}</span>            
            </section>
        </div>
    </div>
  </div>
</template>

<script>
import EmoticonCoolIcon from 'vue-material-design-icons/emoticon-cool'
  export default {
    name: 'vote-list-item',
    components: { EmoticonCoolIcon },
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
        openVote () {
            const id = this.id;
            console.log("here", id);
            this.$router.push({ path: `/vote/${id}` });
        }
    }
  }
</script>
<style lang="scss">
@import "../assets/styles/default";

.vote-list-item-container {
    min-width: $default-card-width;
    min-height: 300px;
    width: $default-card-width;
    height: 300px;
    background: $light-blue;
    border: 2px solid $dark-grey;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
    }

    .item-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;

        .header {
            font-size: 1.2em;
            border-bottom: 2px solid $dark-grey;
            padding: $default-padding;
        }

        .body {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 1;
            padding: $default-padding;

            .description {
                font-size: 2em;
            }
        }
        .footer {
            display: flex;
            border-top: 2px solid $dark-grey;
            section {
                width: 50%;
                padding: $default-padding;

                &.participants-section {
                    display: flex;
                    align-items: center;
                    border-right: 2px solid $dark-grey;
                }
            } 
        }
    }
}
</style>